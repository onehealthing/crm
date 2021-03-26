<template>
    <app-navbar :title="'Admin'">
        <ul class="navbar-nav">
            <li class="nav-item text-center">
                <router-link
                    :to="{ name: 'admin.clients' }"
                    class="nav-link pl-0"
                >Clients
                </router-link>
            </li>
            <li class="nav-item text-center">
                <router-link
                    :to="{ name: 'admin.companies' }"
                    class="nav-link"
                >Companies
                </router-link>
            </li>
            <app-auth-logout>
                <template #default="{ handleLogout }">
                    <li class="nav-item text-center">
                        <span
                            @click="handleLogout()"
                            role="button"
                            class="nav-link pr-0"
                        >Exit</span>
                    </li>
                </template>
            </app-auth-logout>
        </ul>
    </app-navbar>

    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component"/>
        </transition>
    </router-view>

</template>

<script>

    import { Navbar } from '@/layouts/navbars';
    import { Logout } from '@/components/auth';

    export default {
        components: {
            'app-navbar': Navbar,
            'app-auth-logout': Logout,
        }
    }

</script>