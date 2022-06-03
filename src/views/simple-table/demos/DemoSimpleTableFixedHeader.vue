<template>
<v-card>
    <v-card-title>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="userList" :items-per-page="2" :search="search"  hide-default-footer class="elevation-1">
    </v-data-table>

    <paginate :page-count="last_page" :click-handler="getResults" :container-class="'pagination'">
    </paginate>
</v-card>
<!-- <v-simple-table height="250" fixed-header>
    <template v-slot:default>
        <table class="table" id="datatable">
            <thead>
                <tr>
                    <th class="text-uppercase">
                        ID
                    </th>
                    <th class="text-center text-uppercase">
                        Name
                    </th>
                    <th class="text-center text-uppercase">
                        Email
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in userList" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td class="text-center">
                        {{ item.name }}
                    </td>
                    <td class="text-center">
                        {{ item.email }}
                    </td>
                </tr>
            </tbody>
        </table>
    </template>
</v-simple-table> -->
</template>

<script>
export default {
    components: {},
    data() {
        return {
            userList: [],
            pageList: [],
            search: '',
            currentPage: 0,
            lastPage: 0,
            page: 0,
            last_page: 0,
            headers: [{
                    text: 'ID',
                    align: 'start',
                    sortable: false,
                    value: 'id',
                },
                {
                    text: 'Name',
                    value: 'name'
                },
                {
                    text: 'Email',
                    value: 'email'
                },
            ],
        }
    },
    created() {
        this.$http.get("api/users").then(function (res) {
            // this.$http.get('https://api.instantwebtools.net/v1/passenger?page=0&size=20').then(function (res) {
            // this.userList = res.data.data;
            // this.currentPage = res.data.current_page;
            // this.lastPage = res.data.last_page;
            // this.page = page;
        })
        this.getResults();
        // axios
        // .get('http://localhost:8080/api/users')
        // .then(function(res) {
        //     this.userList = res.data;
        // })
    },
    methods: {
        getResults(page = 1) {
            this.$http.get("api/users?page=" + page, this.userList).then(function (res) {
                this.userList    = res.data.data;
                this.last_page = res.data.last_page;
            })
        }
    },
}
</script>
