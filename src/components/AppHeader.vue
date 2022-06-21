<template>
  <div class="header">
    <nav class="header-nav">
      <div class="header-nav-desktop">
        <div class="header-nav-desktop-content">
          <div class="header-nav-desktop-content-menu">
            <div class="header-nav-desktop-content-menu-logo">
              <img class="block h-18 w-24 mt-3" src="../assets/logo.png" />
            </div>
            <div class="header-nav-desktop-content-menu-links">
              <div class="header-nav-desktop-content-menu-links-list">
                <router-link
                  v-for="(item, index) in links"
                  :key="index"
                  :to="item.link"
                >
                  {{ item.label }}
                </router-link>
              </div>
            </div>
          </div>

          <div class="header-nav-desktop-content-profile">
            <div class="header-nav-desktop-content-profile-content">
              <div class="header-nav-desktop-content-profile-content-dropdown">
                <div>
                  <button
                    type="button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    @click="profile = !profile"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>

                <div
                  class="header-nav-desktop-content-profile-content-dropdown-menu"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                  v-if="profile"
                  v-on-clickaway="closeMenu"
                >
                  <router-link
                    v-for="(item, index) in linksMenu"
                    :key="index"
                    :to="item.link"
                  >
                    {{ item.label }}
                  </router-link>

                  <a @click="logout" class="cursor-pointer">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";

const profile = ref(false);

defineProps({
  links: { default: () => [] },
  linksMenu: {
    default: () => [],
  },
});

const closeMenu = () => {
  profile.value = false;
};
</script>

<style scoped lang="scss">
.header {
  @apply bg-gradient-to-r from-gray-900 to-gray-700 pb-32;

  &-nav {
    @apply border-b border-indigo-300 border-opacity-25 lg:border-none;

    &-desktop {
      @apply mx-auto max-w-7xl px-2 sm:px-4 lg:px-8;

      &-content {
        @apply relative flex h-16 items-center justify-between 
          lg:border-b lg:border-gray-900 lg:border-opacity-25;

        &-menu {
          @apply flex items-center px-2 lg:px-0;

          &-logo {
            @apply flex-shrink-0;
          }

          &-links {
            @apply hidden lg:ml-10 lg:block;

            &-list {
              @apply flex space-x-4;

              a {
                @apply rounded-md bg-gray-900 py-2 px-3 text-sm font-medium text-white;
              }
            }
          }
        }

        &-profile {
          @apply hidden lg:ml-4 lg:block;

          &-content {
            @apply flex items-center;

            &-dropdown {
              @apply relative ml-3 flex-shrink-0;

              button {
                @apply flex rounded-full bg-gray-900 text-sm text-white focus:outline-none
                  focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900;
              }

              &-menu {
                @apply absolute right-0 mt-2 w-48 origin-top-right rounded-md 
                  bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none;

                a {
                  @apply block py-2 px-4 text-sm text-gray-700;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
