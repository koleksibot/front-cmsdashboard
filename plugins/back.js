import Vue from 'vue'

Vue.mixin({
    methods: {
        async callApi(method, url, dataObj) {
           
            try {
                let data = await this.$axios({
                    method: method,
                    url: url,
                    data: dataObj
                })
                return data
            } catch (error) {
                return error.response
            }
        },
        crud(method, url, dataObj) {
            
            return this.$axios({
                method: method,
                url: url,
                data: dataObj
            })

        },
       
    }
})