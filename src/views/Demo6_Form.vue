<template>
  <div id="demo6">
    <h1>Demo 6 : Form</h1>
    <!-- prevent default to modifier -->
    <form v-on:submit.prevent="submit"> 
      <div>
        <label for="first_name">FirstName</label>
        <input type="text" name="first_name" v-model.trim="applicant.first_name" />
      </div>
      <div>
        <label for="last_name">LastName</label>
        <input type="text" name="last_name" v-model.trim="applicant.last_name" />
      </div>
      <!-- Sex -->
      <div>
        <label for="sex">Male</label>
        <input type="radio" name="sex" value="male" v-model="applicant.sex" />
        <label for="sex">Female</label>
        <input type="radio" name="sex" value="female" v-model="applicant.sex" />
      </div>
      <!-- Age -->
      <div>
          <label for="age">Age: </label>
          <input type="number" v-model.number="applicant.age">
      </div>
      <!-- Course -->
      <div>
        <select name="courses" v-model="applicant.course">
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vuejs">VueJs</option>
        </select>
      </div>
      <button type="button" @click.exact="clear()" @click.alt="useDefault()">Clear</button>
      <button type="submit">Submit</button>
    </form>
    <div style="margin-top: 20px; color: blue">
      #View : {{ JSON.stringify(applicant) }}
    </div>
    <div style="margin-top: 20px; color: blue">
      #View : {{ applicant.first_name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "demo6",
  data() {
    return {
      applicant: {
        first_name: "",
        last_name: "",
        sex: "male",
        course: "vuejs",
        age:0
      },
    };
  },
  methods: {
    submit() {
        // event.preventDefault();
        console.log(event)
      alert(JSON.stringify(this.applicant))
    },
    clear() {
      this.applicant = {
        first_name: "",
        last_name: "",
        sex: "male",
        course: "vuejs",
        age:0
      };
    },
    useDefault() {
      this.applicant = {
        first_name: "UNKNOW",
        last_name: "UNKNOW",
        sex: "male",
        course: "vuejs",
        age:10
      };
    }
  },
};
</script>

<style>
</style>