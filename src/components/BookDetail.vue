<template>
  <div>
    <div style="display: none" ref="addtobookcar">
      <div class="toast d-flex align-items-center" role="alert" aria-live="assertive" aria-atomic="true"
           style="width: 100%;background: rgb(209, 231, 221)">
        <div class="toast-body"
             style="width: 100%;text-align: center;font-size: 15px;padding: 20px 0;color: rgb(15, 81, 50)">
          添加成功
        </div>
        <button type="button" class="btn-close ms-auto me-2" data-bs-dismiss="toast" aria-label="Close"
                @click="toastclose"></button>
      </div>
    </div>
    <div class="container" v-if="bookdetail.length===0">
      <div class="row">
        <div class="col-12" style="text-align: center">
          <h1 style="margin: 30px">ISBN输入错误</h1>
        </div>
      </div>
    </div>
    <div v-if="bookdetail.length!==0" class="container" style="border: 1px solid #ebebeb">
      <!--      内容-->
      <div class="row" v-if="bookdetail" style="margin: 40px 0">
        <div class="col-12 col-md-9">
          <div class="row"
               style="padding-bottom: 20px;border-bottom: 1px solid #ebebeb;border-right: 1px solid #ebebeb;">
            <!--        左侧图片-->
            <div class="col-3">
              <img :src="bookdetail[0].bookPic" alt="" style="max-height: 100%;width: 100%">
            </div>
            <!--        中间信息-->
            <div class="col-9">
              <!--              title-->
              <div class="row">
                <div class="col-12 bookmain">
                  <span class="booktitle">HOT</span>
                  {{ bookdetail[0].bookName }}
                </div>
              </div>
              <!--              author-->
              <div class="row">
                <div class="col-12 bookdetail">作者：
                  {{ bookdetail[0].bookAuthor }}
                </div>
              </div>
              <!--              isbn-->
              <div class="row">
                <div class="col-12 bookdetail">ISBN：
                  {{ bookdetail[0].bookIsbn }}
                </div>
              </div>
              <!--              public-->
              <div class="row">
                <div class="col-12 bookdetail">出版社：
                  {{ bookdetail[0].bookPublic }}
                </div>
              </div>
              <!--              date-->
              <div class="row">
                <div class="col-12 bookdetail">出版日期：
                  {{ bookdetail[0].bookPublicDate }}
                </div>
              </div>
              <!--              sort-->
              <div class="row">
                <div class="col-6 bookdetail">分类：
                  {{ bookdetail[0].bookSort }}
                </div>
              </div>
              <!--              button-->
              <div class="row">
                <div class="col-10">
                  <span class="bookdetail bookbutton" @click="sendtocar(bookdetail[0])" style="cursor:pointer;">
                    <i class="bi-bag-check"></i>
                    借阅
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!--      须知行-->
          <div class="row"
               style="border-bottom: 1px solid #ebebeb;border-right: 1px solid #ebebeb;border-left: 1px solid #ebebeb;">
            <div class="col-3">
              <h4 style="margin: 20px 0">借阅须知</h4>
            </div>
          </div>
          <!--      须知内容-->
          <div class="row"
               style="border-bottom: 1px solid #ebebeb;border-right: 1px solid #ebebeb;border-left: 1px solid #ebebeb;">
            <div class="col-12">
              <ul style="margin: 40px 0">
                <li>
                  一、爱护书刊资料，请勿圈点、涂改、折叠、剪裁、撕损。读者借阅时，如发现书刊已有破损污渍或缺页等情况，应立即向工作人员说明，以明责任。二、保持馆内外环境整洁，请勿在图书馆及其附近随地吐痰，抽烟，吃零食以及乱扔纸屑果皮等杂物。三、保持图书馆安静，谈话、走路要轻声，请勿在书库内谈笑和高声争论问题。任何人不得在图书馆内或附近大声喧哗。进入图书馆应将手机调至振动档。如果不听工作人员劝阻，工作人员可命其离开。四、讲究文明礼貌，请勿穿着拖鞋、背心、短裤入馆。五、爱护图书馆各类设施，请勿破馆内桌椅、书架等设施。六、未经许可或办理借阅手续私自携带书刊资料出室的，以窃书论处。七、读者携带的雨具等非学习用品，请存放在指定地点。八、读者请勿带私人书、包等物进入各书库及阅览室或存放在指定地点。贵重物品请自行保管。九、每名员工借书不得超过3本，借阅期限一个月，续借一次一个月。十、离职时请归还所借图书。上述规定如有违反，按图书馆制定的各违章制度处理。书刊资料遗失、损坏赔偿、逾期违章处理制度
                  图书馆所有的书刊资料都是公司的宝贵财富，读者应倍加爱护，妥善保管，在规定期限内借阅使用，违者按下列办法处理： 一、 遗失赔偿制度
                  凡遗失图书（包括报纸、期刊）应以相同版本图书（指图书ISBN号、期刊ISSN号及期刊数一致）赔偿或按下列规定赔偿现金：
                  <ul>
                    <li style="margin-top: 15px">1． 一般中文图书按原价3倍赔偿。</li>
                    <li>2． 使用价值较大的或不易购置到的，或馆藏复本在三本及三本以下的图书按原价的3-5倍赔偿。</li>
                    <li>3． 成套多卷书遗失其中一册者按全套价格的2倍赔偿；如果各分册有定价，则以分册价格的3倍赔偿。</li>
                    <li>4． 工具书、辞典、毕业设计用书按原价5倍赔偿。</li>
                    <li>5． 国内出版的影印本外文图书按原价3倍赔偿；国外出版的原版外文图书按原价5倍赔偿。</li>
                  </ul>
                </li>
                <li>
                  二、不能损坏图书条形码；凡损坏书刊（包括撕页、批注、圈点、划线、油迹、水迹、墨迹、散页等），按不同程度处理：
                  <ul>
                    <li style="margin-top: 15px"> 1． 污损、散页视程度轻重按图书原价的30%～100%赔偿；
                    </li>
                    <li> 2．书刊撕页、“开天窗”，视程度轻重按原价2～3倍赔偿。
                    </li>
                  </ul>
                </li>
                <li>
                  三、合订报纸遗失、损坏一份，按合订本计价赔偿；遗失、损坏累计一个月者，按一年报价2～3倍赔偿。
                </li>
                <li>
                  四、合订期刊，遗失、损坏一期，按全年计价2～3倍赔偿。
                </li>
                <li>
                  五、集体借阅图书，应有专人负责，如有遗失或损坏，根据上述各条由负责人赔偿。
                </li>
                <li>
                  六、凡偷窃本馆书刊资料者，处以偷窃书刊原价的10倍罚款，除作书面检查外，并将其移交学校保卫处处理。
                </li>
                <li>
                  七、借阅图书逾期不归还且为办理续借手续者，自逾期日起，每天每册罚款0.10元，并逐日累加。
                </li>
                <li>
                  八、涂写、刻划、污损阅览桌椅、书架或馆内其他设施者，视情节轻重，给予批评教育或赔偿相应损失。
                </li>
                <li>
                  九、违反《图书馆节约须知》规定者，视不同情况，给予劝阻、教育、批评或取消借阅资格。
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--        右侧提醒-->
        <div class="col-md-3 d-none d-md-block">
          <div class="container" style="background: #fafafa;border:1px solid #ebebeb;">
            <!--            top1-->
            <div class="row" style="margin-top: 20px">
              <div class="col-12">
                <span>
                  <i class="bi-x-circle"></i>
                  请勿带个人书籍
                </span>
              </div>
              <div class="col-12 d-none d-xxl-block">
                <span style="display: inline-block;vertical-align: middle;margin-top: 6px;font-size: 12px;color: #999">
                  因座位有限，为保证查阅资料读者的需要，请勿带个人书籍在馆内自习。
                </span>
              </div>
            </div>
            <!--            top2-->
            <div class="row" style="margin-top: 20px">
              <div class="col-12">
                <span>
                  <i class="bi-check-circle"></i>
                  免费寄存
                </span>
              </div>
              <div class="col-12 d-none d-xxl-block">
                <span style="display: inline-block;vertical-align: middle;margin-top: 6px;font-size: 12px;color: #999">
                  随身携带的包、饮用水、及其它与借阅无关的物品免费寄放到存包处；
                </span>
              </div>
            </div>
            <!--top3-->
            <div class="row" style="margin-top: 20px;margin-bottom: 20px">
              <div class="col-12">
                <span>
                  <i class="bi-exclamation-circle"></i>
                  请保持馆区安静
                </span>
              </div>
              <div class="col-12 d-none d-xxl-block">
                <span style="display: inline-block;vertical-align: middle;margin-top: 6px;font-size: 12px;color: #999">
                  入室请将移动通讯设备置于静音状态；除特别批准外，阅览室内禁止照相、摄影（不得使用闪光灯）；
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import store from '../store'

export default {
  name: 'BookDetail',
  data: function () {
    return {
      bookdetail: []
    }
  },
  methods: {
    getBook () {
      // console.log(this.$route.query.ISBN)
      this.$axios({
        method: 'get',
        url: '/book/isbn',
        params: {
          ISBN: this.$route.query.ISBN
        }
      }).then(res => {
        this.bookdetail = res
        // console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    sendtocar (obj) {
      if (this.$cookies.get('account')) {
        this.$store.commit('booinsert', obj)
        this.$refs.addtobookcar.style.display = 'block'
        setTimeout(() => {
          this.toastclose()
        }, 3000)
      } else {
        this.$router.push({ name: 'login' })
      }
    },
    toastclose () {
      this.$refs.addtobookcar.style.display = 'none'
    }
  },
  watch: {
    $route (to, from) {
      // console.log(to)
      // console.log(from)
      location.reload()
      // this.$forceUpdate()
    }
  },
  created () {
    this.getBook()
  }
}
</script>

<style scoped>
@media screen and (max-width: 992px) {
  .bookdetail {
    margin: 10px !important;
    font-size: 15px !important;
  }
}

@media screen and (max-width: 768px) {
  .booktitle {
    font-size: 12px !important;
  }

  .bookmain {
    font-size: 14px !important;
  }

  .bookdetail {
    margin: 3px !important;
    font-size: 12px !important;
  }
}

.booktitle {
  max-height: 34px;
  background: linear-gradient(-45deg, #ff1268, #ff5593);
  margin-right: 10px;
  font-size: 15px;
  font-weight: normal;
  color: white;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  padding: 5px;
  border-bottom-right-radius: 25%;
  border-top-left-radius: 25%;
}

.bookmain {
  font-size: 22px;
  color: #000;
  font-family: 'Microsoft YaHei UI', sans-serif
}

.bookdetail {
  font-size: 18px;
  font-family: "Microsoft YaHei UI", sans-serif;
  color: #4A4A4A;
  margin-top: 30px;
}

.bookbutton {
  text-align: center;
  display: inline-block;
  vertical-align: center;
  margin-top: 20px;
  background: #ff2d79;
  color: white;
  padding: 10px 30px;
  border-radius: 5px;
}

li {
  padding-bottom: 15px;
}
</style>
