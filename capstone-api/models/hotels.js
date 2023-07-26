require('dotenv').config();

const { BadRequestError } = require("../utils/errors");

const rapidapikey = process.env.rapidapikey
const rapidapihost = process.env.rapidapihost
const axios = require('axios');

class Hotels {
  //Serach Hotels by locations or name
  //The user must specificy the location or destination 
  //first (this can happen in the homepage)
  static async searchLocations(credentials) {
    const requiredFields = ["location_name"];
    requiredFields.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body.`);
      }
    });

    const options = {
    method: 'GET',
    url: 'https://booking-com.p.rapidapi.com/v1/hotels/locations',
    params: {
        name: credentials.location_name,
        locale: 'en-us'
    },
    headers: {
        'X-RapidAPI-Key': rapidapikey,
        'X-RapidAPI-Host': rapidapihost
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data[0].dest_id)
        return response.data[0].dest_id;
      } catch (error) {
        console.error(error);
        //console.error("Desination ID:", Hotels.destId)
        throw new BadRequestError("Failed to fetch Search Locations");
      }

  }

  static async searchHotels(credentials) {
    const requiredFields =
     ["order_by", 
      "adults_number",
      "checkin_date", //2023-09-07 in this format
      "checkout_date",
      "room_number",
      "dest_Id"];
    requiredFields.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body.`);
      }
    });
    console.log(credentials)
    const options = {
      method: 'GET',
      url: 'https://booking-com.p.rapidapi.com/v2/hotels/search',
      params: {
        order_by: credentials.order_by,    //Required Parameters 
        // Title: HotelsSearchOrderBy   
        // Enum: 
        // popularity,
        // class_ascending,
        // class_descending,
        // distance,
        // upsort_bh,
        // review_score,
        // price

        adults_number: credentials.adults_number, 
        // Title: Adults Number
        // Maximum: 29
        // Minimum: 1     

        checkin_date: credentials.checkin_date,

        filter_by_currency: 'USD',
        //Keeping it at USD

        dest_id: credentials.dest_Id, //'-553173'
        //Once the user searches the hotel by location
        //the dest_id field can be updated 

        locale: 'en-us',

        checkout_date: credentials.checkout_date,
        units: 'metric',

        room_number: credentials.room_number,
        // Title: Room Number
        // Maximum: 29
        // Minimum: 1
        // Description: Number of rooms

        dest_type: 'city',  
        //destination can be a variety 
        //we can just set it to city       


        // include_adjacency: 'true', //Optional Parameters 
        // children_number: '2',
        // page_number: '0',
        // children_ages: '5,0',
        // categories_filter_ids: 'class::2,class::4,free_cancellation::1'

        // page_number: '0' //uncomment this to add page number 
              
        // Title: Page Number

        // Maximum: 100000

        // Minimum: 0

        // Description: Page number

        // Default: 0
      },
      headers: {
        'X-RapidAPI-Key': rapidapikey,
        'X-RapidAPI-Host': rapidapihost
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      return response.data;
    } catch (error) {
      //console.error(error);
      console.log("destination ID is:", credentials.dest_Id)
      throw new BadRequestError("Failed to fetch Search Hotels");
    }

  }

  //gets specific data per hotel
  
  static async HotelsData(credentials) { 
    console.log("Printing Hotel Data");
    const requiredFields = ["hotel_id"];
    requiredFields.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body.`);
      }
    });

    const options = {
      method: 'GET',
      url: 'https://booking-com.p.rapidapi.com/v1/hotels/data',
      params: {
        hotel_id: credentials.hotel_id,
        locale: 'en-us'
      },
      headers: {
        'X-RapidAPI-Key': rapidapikey,
        'X-RapidAPI-Host': rapidapihost
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new BadRequestError("Failed to fetch Hotels Data");
    }
  }

  //Hotels Detail 
  static async HotelsDetail(credentials) {

    const requiredFields = ["hotel_id", "checkout_date", "checkin_date"];
    requiredFields.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body.`);
      }
    });

    const options = {
    method: 'GET',
    url: 'https://booking-com.p.rapidapi.com/v2/hotels/details',
    params: {
        hotel_id: credentials.hotel_id,
        currency: 'USD',
        locale: 'en-us',
        checkout_date: credentials.checkout_date,
        checkin_date: credentials.checkin_date
    },
    headers: {
        'X-RapidAPI-Key': rapidapikey,
        'X-RapidAPI-Host': rapidapihost
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
        throw new BadRequestError("Failed to fetch Hotel Detail");
      }
  }
  
  //Hotel Schema 
  static async getHotelById(id) {
    if (!id) {
      throw new BadRequestError("No id provided");
    }
    const query = `SELECT * FROM hotels WHERE id = $1`;
    const result = await db.query(query, id);
    const user = result.rows[0];
    return user;
  }

  static async addHotel(credentials) {

  const requiredFields = ["id", "email", "name", "country", "city", "price"];
  requiredFields.forEach((field) => {
    if (!credentials.hasOwnProperty(field)) {
      throw new BadRequestError(`Missing ${field} in request body.`);
    }
  });

  // const exisitingHotel = await Hotels.getHotel(credentials.user_email);
  
  // const lowercasedEmail = credentials.user_email.toLowerCase();

  const query = `
    INSERT INTO hotels (id, email, name, country, city)
    VALUES ($1, $2, $3, $4, $5)
  `;
  const result = await db.query(query, [
    credentials.id,
    credentials.email,
    credentials.name,
    credentials.country,
    credentials.city
  ]);
  return;

  }

  static async updateHotel(id, updates) {
    const query = `
      UPDATE hotels
      SET name = $1, country = $2, city = $3, price = $4
      WHERE id = $5
    `;
    const { name, country, city, price } = updates;
    const result = await db.query(query, [name, country, city, price, id]);
    return;
  }

  static async deleteHotel(id) {
    const query = `
      DELETE FROM hotels
      WHERE id = $1
    `;
    const result = await db.query(query, [id]);
    return;
  }



  
}

module.exports = Hotels;
