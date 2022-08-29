<template>
  <v-sheet min-height="600" rounded="lg">
    <h2>ข้อมูลส่วนตัว</h2>
    <v-divider class="my-2"></v-divider>
    <v-card>
      <v-card class="m-4 p-4">
        <v-row>
          <v-col cols="3">
            <v-card-text>ชื่อ</v-card-text>
          </v-col>

           <v-col cols="3">
            <v-card-text>นามสกุล</v-card-text>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
             <v-card-text>ที่อยู่</v-card-text>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="3">
            <v-card-text >ตำบล {{}}</v-card-text>
          </v-col>

          <v-col cols="3">
            <v-card-text>อำเภอ {{}}</v-card-text>
          </v-col>

          <v-col cols="3">
            <v-card-text>จังหวัด {{}}</v-card-text>
          </v-col>
        </v-row>

        <v-card-text>เบอร์โทร</v-card-text>
        <v-card-text>อีเมล</v-card-text>
        <v-card-action>
          <v-btn class="info">แก้ไข</v-btn>
        </v-card-action>
      </v-card>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Display',
  data () {
    return {
      name: 'ปารินทร์',
      details: {
        name: 'ปารินทร์',
        last_name: 'บูระพา',
        address: {
          add: '63 หมู่ที่ 14',
          sub_district: 'ห้วยหิน',
          distrint: 'หยองหงส์',
          province: 'บุรีรัมย์',
          tel: '0939878661',
          email: 'parin_boorapa@hotmail.com'
        }
      }
    }
  }
}
</script>

<style>

</style>
