<template>
    <div class="footer">
       <div class="concat">
           <!-- @click="modal1=true" -->
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
               <p>网站所属：{{content}}</p>
               <P>ICP号：浙CP备13017989号</P>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            // 是否显示弹出框
            // modal1:false,
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
            },
            content:'广州熙彬贸易有限公司'
        }
    },
    created(){
       this.change()
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
        change(){
            console.log(location.href);
            if(location.href.includes('xmvogue')){
                console.log(1);
                this.content='广州熙彬贸易有限公司'
            }else{
                this.content='义乌楚睿电子商务有限公司';
            }
        }
    }
}
</script>




