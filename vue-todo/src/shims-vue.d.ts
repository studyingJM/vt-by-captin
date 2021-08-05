// vue 파일을 모두 Vue 타입으로 인식해줘!
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
