import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import style from "@/style/home/docker.module.scss";
const Docker = defineComponent({
  name: "Docker",
  setup() {
    const router = useRouter();
    return () => {
      const dockerList = [
        {
          icon: "home-fill",
          path: "Home",
          name: "首页",
        },
        {
          icon: "cart",
          path: "CartList",
          name: "购物车",
        },
        {
          icon: "order",
          path: "Order",
          name: "订单",
        },
        {
          icon: "my",
          name: "我的",
          path: "My",
        },
      ];
      const jumpPath = (path) => {
        router.push({ name: path });
      };
      return (
        <div class={style.docker}>
          {dockerList.map((item, index) => {
            let className = style.docker_item + " " + (index === 0 ? style["docker_item--active"] : "");
            return (
              <div className={className} onClick={() => jumpPath(item.path)}>
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
