import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import style from "@/style/home/icons.module.scss";
import imgList from "@/utils/imgList";
const Icons = defineComponent({
  name: "Icons",
  setup() {
    const router = useRouter();
    const handleClickDetail = () => {
      router.push({
        name: "Shop",
        params: { id: 1 },
      });
    };
    return () => {
      const iconList = [
        {
          name: "超市便利",
          img: imgList[0],
        },
        {
          name: "菜市场",
          img: imgList[1],
        },
        {
          name: "水果店",
          img: imgList[2],
        },
        {
          name: "鲜花绿植",
          img: imgList[3],
        },
        {
          name: "医药健康",
          img: imgList[4],
        },
        {
          name: "家居时尚",
          img: imgList[5],
        },
        {
          name: "烘焙蛋糕",
          img: imgList[6],
        },
        {
          name: "签到",
          img: imgList[7],
        },
        {
          name: "大牌免运",
          img: imgList[8],
        },
        {
          name: "红包套餐",
          img: imgList[9],
        },
      ];
      return (
        <div class={style.icons}>
          {iconList.map((item) => {
            return (
              <div class={style["icons-item"]} key={item.name} onClick={() => handleClickDetail()}>
                <img src={item.img} />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      );
    };
  },
});

export default Icons;
