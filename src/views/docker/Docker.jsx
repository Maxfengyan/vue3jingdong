import { defineComponent, ref, getCurrentInstance, reactive, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import style from "@/style/home/docker.module.scss";
const Docker = defineComponent({
  name: "Docker",
  setup() {
    const router = useRouter();
    const store = useStore();
    const activeIndex = computed(() => {
      return store.getters.activeIndex;
    });
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
        path: "OrderList",
        name: "订单",
      },
      {
        icon: "my",
        name: "我的",
        path: "My",
      },
    ];
    const jumpPath = (path, index) => {
      store.dispatch("docker/ChangeIndex", index);
      router.push({ name: path });
    };
    return () => {
      return (
        <div class={style.docker}>
          {dockerList.map((item, index) => {
            let className = style.docker_item + " " + (activeIndex.value === index ? style["docker_item--active"] : "");
            return (
              <div className={className} onClick={() => jumpPath(item.path, index)}>
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
