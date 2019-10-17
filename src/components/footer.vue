<template>
    <div class="footer">
       <div class="concat" @click="modal1=true">
           <img src="@/assets/images/concat.jpg" alt="">
       </div>
       <div class="bottom">
           <div>
               <h3>义乌总部</h3>
               <p>浙江省义乌市丹溪北路728号</p>
               <h3>华东分部</h3>
               <p>浙江省杭州华成国际发展大厦1901-1902</p>
               <h3>华南分部</h3>
               <p>广州国际金融中心1802-1803单元</p>
           </div>
           <div>
               <h3>供应商合作</h3>
               <p>电话：0579-85893900</p>
               <p>邮箱：22245727@qq.com</p>
           </div>
           <div>
               <img src="@/assets/images/LOGO.png" alt="">
               <h3>免费热线：400-863-5888</h3>
               <p>@2019熙美诚品 版权所有 ALL Rights Reserved</p>
               <p>网站所属：广州熙彬贸易有限公司</p>
               <P>ICP号：浙CP备13017989号</P>
           </div>
       </div>
       <Modal v-model="modal1"  class="footerModal">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" >
                <FormItem label="姓名（已加密，请放心填写）" prop="name">
                    <Input v-model="formValidate.name" placeholder="请输入您的姓名"></Input>
                </FormItem>
                <FormItem label="电话（已加密，请放心填写）" prop="phone">
                    <Input v-model="formValidate.phone" placeholder="请输入您的电话" type="number"></Input>
                </FormItem>
                <FormItem>
                    <img src="@/assets/images/submit.png" alt="" style="width: 100%;margin: auto;" @click="handleSubmit('formValidate')">
                </FormItem>
            </Form>
        </Modal>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // 是否显示弹出框
            modal1:false,
            // 填写表单
            formValidate:{
                name: '',
                phone:'',
            },
            ruleValidate: {
                name: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' }
                ],
                phone: [
                    {  type: 'number',required: true, message: '电话不能为空', trigger: 'blur' },
                ],
            }
        }
    },
    
    methods:{
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
        },
    }
}
</script>




