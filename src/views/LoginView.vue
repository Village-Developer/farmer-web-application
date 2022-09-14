<template>
    <v-container
        fluid
        fill-height
        dark
    >
        <v-container
            class=""
            grid-list-xs
        >
            <v-row>
                <v-col
                    class="d-flex justify-center mb-4"
                >
                    <v-img
                        class="mr-4"
                        contain
                        max-height="50"
                        max-width="50"
                        src="../assets/login/logo.jpg"
                    ></v-img>
                    <h1
                        class="titleFont"
                    >
                        Farmer Project
                        </h1>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="d-flex justify-center">
                    <v-card
                        max-width="450"
                        min-width="450"
                        elevation="2"
                    >
                        <v-form>
                            <v-container
                                class="px-16"
                            >
                                <v-row>
                                    <v-col
                                        class="d-flex justify-center my-5"
                                    >
                                        <h1
                                            class="titleFormFont"
                                        >
                                            Login
                                        </h1>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col class="px-0">
                                        <v-text-field
                                            hide-details
                                            prepend-inner-icon="mdi-email"
                                            name="email"
                                            placeholder="Email"
                                            type="email"
                                            outlined
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col class="px-0">
                                        <v-text-field
                                            hide-details
                                            prepend-inner-icon="mdi-lock"
                                            append-icon="mdi-eye"
                                            name="password"
                                            placeholder="Password"
                                            type="password"
                                            outlined
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col class="px-0">
                                        <v-btn
                                            href="/farmer/api-document"
                                            class="btnFormFont"
                                            color="success"
                                            height="50px"
                                            elevation="5"
                                            block
                                        >
                                            Login
                                        </v-btn>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col class="line px-0">
                                        <v-btn
                                            href="/farmer/register"
                                            class="btnFormFont mb-7"
                                            color="white"
                                            height="50px"
                                            elevation="3"
                                            block
                                        >
                                            Register
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-form>
                        <v-container
                            grid-list-xs
                            class="d-flex justify-center"
                            height="50px"
                        >
                            <h6 class="forgotFont"><a>Forgot password?</a></h6>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>
    .titleFont {
        font-family: 'Lemon', cursive;
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 47px;
    }
    .titleFormFont {
        font-family: 'Lemon', cursive;
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        line-height: 47px;
    }
    .btnFormFont {
        font-family: 'Lemon', cursive;
        font-style: normal;
        font-weight: 800;
        font-size: 28px;
        line-height: 47px;
    }
    .forgotFont {
        font-family: 'Lemon', cursive;
        font-style: normal;
        font-weight: 800;
        font-size: 12px;
        line-height: 28px;
    }
    .line {
        border-bottom: solid 2px;
        border-bottom-color: #B9B6B6;

    }
</style>
