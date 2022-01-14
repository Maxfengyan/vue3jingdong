import { defineComponent } from "vue";
import style from "@/style/home/docker.module.scss";
const Docker = defineComponent({
  name: "Docker",
  setup() {
    return () => {
      const dockerList = [
        {
          icon: "home-fill",
          name: "首页",
        },
        {
          icon: "cart",
          name: "购物车",
        },
        {
          icon: "order",
          name: "订单",
        },
        {
          icon: "my",
          name: "我的",
        },
      ];
      return (
        <div class={style.docker}>
          {dockerList.map((item, index) => {
            let className = style.docker_item + " " + (index === 0 ? style["docker_item--active"] : "");
            return (
              <div className={className}>
                <svg-icon icon-class={item.icon} />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      );
    };
  },
});

export default Docker;
