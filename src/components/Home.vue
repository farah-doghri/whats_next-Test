<template>
  <div class="bg-header bg-cover bg-center max-h-56 h-56 bg-no-repeat table w-full mb-11">
    <div class="align-middle table-cell text-center ">
      <h1 class="text-3xl uppercase font-semibold text-pink">Restaurant list</h1>
      <p class="text-gray-50">Here you'll find the list of all the restaurants nearby.</p>
    </div>
  </div>

  <h2 class="text-2xl uppercase font-medium mb-10">The restaurants around you</h2>

  <div class="w-full p-2 flex flex-wrap justify-around" v-if="restaurants.length > 0">
    <div class="m-2 mb-7 w-64 shadow-md rounded-md" v-for="restaurant in restaurants" :key="restaurant.name">
      <img :src="restaurant.image_url" class="w-72 h-36 object-cover rounded-t-md"/>
      <div class="p-4">
        <h3 class="text-xl uppercase font-semibold text-brown w-full mb-3">{{ restaurant.name }}</h3>
        <h4 class="text-left"> Rating : {{ restaurant.rating }}/5</h4>
        <h5 class="text-left">Price : {{ restaurant.price }} </h5>
        <ul>
          <li>
            {{ categorie() }}
          </li>
        </ul>
        <p class="text-left">Address : {{ restaurant.location.address1 + ", " + restaurant.location.city + ", " + restaurant.location.state + " " + restaurant.location.zip_code }} </p>
        <a :href="restaurant.url" target="_blank">Go to page</a><br>
        <button :href="`restaurants/${restaurant.id}`">Details</button>
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name : 'Home',
  data() {
    return {
      restaurants : []
    }
  },

  mounted() {
    this.getRestaurants();
  },

  methods : {
    getRestaurants() {
      this.restaurants = axios.get(
        'http://localhost:8000/restaurants').then((response) => {
          this.restaurants = JSON.parse(response.data.body).businesses;
          console.log(this.restaurants)
        }).catch((e) => {
          console.error('Error in GET restaurant', e);
        })
    },
    
    categorie() {
      for(let i = 0; i < length; i++) {
        return this.restaurant.categories[i].title;
      }
    }

  }
};
</script>
