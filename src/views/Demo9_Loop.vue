<template>
  <div id="demo9">
    <h1>demo 9</h1>
    <ul>
      <li v-for="(item, index) in mCourse" :key="index">
        {{ item.title }} : {{ item.price }}
      </li>
    </ul>
    <hr />
    <ul>
      <!-- Destructuring -->
      <li v-for="({ title, price }, index) in mCourse" :key="index">
        {{ title }} : {{ price }}
      </li>
    </ul>
    <hr />
    <input type="text" placeholder="Title" v-model="course.title" /><br />
    <input type="number" placeholder="Price" v-model="course.price" /><br />
    <button @click="addCourse">Submit</button>
    <ul>
      <!-- Dynamic -->
      <li v-for="(course, index) in dynamic_course" :key="index">
        {{ course.title }} : {{ course.price }}
        <button @click="removeCourse(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "demo9",
  methods: {
    addCourse() {
      this.dynamic_course.push(this.course);
      this.course = { title: "", price: 0 };
    },
    removeCourse(index) {
      this.dynamic_course.splice(index, 1);
    },
  },
  data() {
    return {
      course: { title: "", price: 0 },
      dynamic_course: [],
      mCourse: [
        { title: "IOS", price: 100 },
        { title: "Android", price: 200 },
        { title: "Flutter", price: 300 },
      ],
    };
  },
};
</script>

<style>
</style>