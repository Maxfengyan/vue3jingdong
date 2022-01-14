import { defineComponent } from "vue";
import style from "@/style/home/nearby.module.scss";
import nearby from "@/assets/near.png";
const Nearby = defineComponent({
  name: "Nearby",
  setup() {
    return () => {
      const list = [
        {
          id: 1,
          title: "沃尔玛",
          img: nearby,
          tags: ["月售1万+", "起送￥0", "基础运费￥5"],
          desc: "VIP尊享满89元减4元运费券（每月3张）",
        },
        {
          id: 2,
          title: "沃尔玛",
          img: nearby,
          tags: ["月售1万+", "起送￥0", "基础运费￥5"],
          desc: "VIP尊享满89元减4元运费券（每月3张）",
        },
        {
          id: 3,
          title: "沃尔玛",
          img: nearby,
          tags: ["月售1万+", "起送￥0", "基础运费￥5"],
          desc: "VIP尊享满89元减4元运费券（每月3张）",
        },
        {
          id: 4,
          title: "沃尔玛",
          img: nearby,
          tags: ["月售1万+", "起送￥0", "基础运费￥5"],
          desc: "VIP尊享满89元减4元运费券（每月3张）",
        },
        {
          id: 5,
          title: "沃尔玛",
          img: nearby,
          tags: ["月售1万+", "起送￥0", "基础运费￥5"],
          desc: "VIP尊享满89元减4元运费券（每月3张）",
        },
      ];
      return (
        <div class={style.nearby}>
          <h3 class={style.nearby_title}>附近店铺</h3>
          {list.map((item) => {
            return (
              <div class={style.nearby_item} key={item}>
                <img src={item.img} />
                <div class={style.nearby_content}>
                  <div class={style.nearby_content_title}>{item.title}</div>
                  <div class={style.nearby_content_tags}>
                    {item.tags.map((tag) => {
                      return <span class={style.nearby_content_tag}>{tag}</span>;
                    })}
                  </div>
                  <p class={style.nearby_content_heighlight}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    };
  },
});

export default Nearby;
