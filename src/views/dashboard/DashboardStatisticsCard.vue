<template>
<v-card>
    <v-card-title class="align-start">
        <span class="font-weight-semibold">Statistics Card</span>
        <v-spacer></v-spacer>
        <v-btn icon small class="me-n3 mt-n2">
            <v-icon>
                {{ icons.mdiDotsVertical }}
            </v-icon>
        </v-btn>
    </v-card-title>

    <v-card-subtitle class="mb-8 mt-n5">
        <span class="font-weight-semibold text--primary me-1">Total 48.5% Growth</span>
        <span>😎 this month</span>
    </v-card-subtitle>

    <v-card-text>
        <v-row>
            <v-col v-for="data in statisticsData" :key="data.title" cols="6" md="3" class="d-flex align-center">
                <v-avatar size="44" :color="resolveStatisticsIconVariation (data.title).color" rounded class="elevation-1">
                    <v-icon dark color="white" size="30">
                        {{ resolveStatisticsIconVariation (data.title).icon }}
                    </v-icon>
                </v-avatar>
                <div class="ms-3">
                    <p class="text-xs mb-0">
                         {{ data.title }}
                    </p>
                    <h3 class="text-xl font-weight-semibold">
                        {{ data.total == 'user' ? userList.length : data.total }} 
                        <!-- <p v-if="data.total == 'user'"> {{ userList.length }} </p>
                        <p v-else> {{ data.total }} </p> -->
                    </h3>
                </div>
            </v-col>
        </v-row>
    </v-card-text>
</v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
    mdiAccountOutline,
    mdiCurrencyUsd,
    mdiTrendingUp,
    mdiDotsVertical,
    mdiLabelOutline
} from '@mdi/js'

export default {
    data() {
        const statisticsData = [{
                title: 'users',
                total: 'user',
                // total: JSON.stringify(this.userList),
            },
            {
                title: 'posts',
                total: '12.5k',
            },
            {
                title: 'Product',
                total: '1.54k',
            },
            {
                title: 'Revenue',
                total: '$88k',
            },
        ]
        // debugger
        const resolveStatisticsIconVariation = data => {
            if (data === 'users') return {
                icon: mdiTrendingUp,
                color: 'primary'
            }
            if (data === 'posts') return {
                icon: mdiAccountOutline,
                color: 'success'
            }
            if (data === 'Product') return {
                icon: mdiLabelOutline,
                color: 'warning'
            }
            if (data === 'Revenue') return {
                icon: mdiCurrencyUsd,
                color: 'info'
            }

            return {
                icon: mdiAccountOutline,
                color: 'success'
            }
        }

        return {
            statisticsData,
            resolveStatisticsIconVariation,
            // icons
            icons: {
                mdiDotsVertical,
                mdiTrendingUp,
                mdiAccountOutline,
                mdiLabelOutline,
                mdiCurrencyUsd,
            },
            userList: [],
        }
    },
    created() {
        this.$http.get('api/users').then(function (res) {
            this.userList = res.data;
        })
    },
}
</script>
