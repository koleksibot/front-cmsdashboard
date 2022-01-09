<template>
  <div v-if="vista">
    <v-card class="mx-auto hidden-sm-and-down" width="100%">
      <v-img
        height="150"
        src="/banner.jpg"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      >
        <v-card-title>
          <v-breadcrumbs :items="breadCrumbs" large class="mt-8">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
            <template v-slot:item="{ item }">
              <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
                <span class="display-1 font-weight-bold white--text"
                  >{{ item.text.toUpperCase() }}
                </span>
              </v-breadcrumbs-item>
            </template>
          </v-breadcrumbs>
        </v-card-title>
      </v-img>
    </v-card>
  </div>
</template>
<script>
import { createBreadCrumbs } from '~/components/theme/dashboard/utils/app'
export default {
  data() {
    return {
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
    }
  },
  computed: {
    breadCrumbs() {
      return createBreadCrumbs(this.$route)
    },
    vista() {
      if (this.$route.meta.title === 'INICIO') {
        return false
      } else if (this.$route.name === 'noticias-slug') {
        return false
      } else if (this.$route.name === 'servicios-slug') {
        return false
      } else {
        return true
      }
    },
  },
}
</script>