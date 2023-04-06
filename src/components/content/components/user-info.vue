<script lang='ts' setup>
import { ref } from 'vue'
import useTheme from '@/hooks/useTheme'
import DefaultLayout from './default-layout.vue'

interface DataItem {
  label: string
  value: string
}

const { isDark } = useTheme()


const data = ref<DataItem[]>([
  {
    label: '姓名🤵',
    value: '某人眼中的小可爱 😘'
  },
  {
    label: '手机号📱',
    value: '19160368613'
  },
  {
    label: '现住地址🏠',
    value: '四川省/成都市/成华区'
  },
  {
    label: '故乡🏠',
    value: '四川/巴中'
  },
  {
    label: '详细地址🛣️',
    value: '暂时不想写出来'
  }
])

const interestData = ref<DataItem[]>([
  {
    label: '最喜欢的食物🥕',
    value: '不挑食，好养活😊'
  },
  {
    label: '日常爱好❤️',
    value: '看电视📺，听歌🎶，玩游戏🕹️'
  },
  {
    label: '最喜欢的明星 🎭',
    value: '胡歌，霍建华，文章'
  },
  {
    label: '最喜欢的歌星🎶',
    value: '许嵩，周杰伦，林俊杰'
  },
  {
    label: '其他✌️',
    value: '敲代码哈哈，我是打工仔'
  }
])

const playData = ref<DataItem[]>([
  {
    label: '热爱的运动 👟',
    value: '乒乓球，羽毛球'
  },
  {
    label: '户外运动 ☀',
    value: '自行车，散步'
  },
  {
    label: '健身运动 🏋',
    value: '暂时没打算'
  },
  {
    label: '其他的 😊',
    value: '逛街，看电影，看书'
  }
])
</script>

<template>
  <DefaultLayout>
    <template #top> TingFeng </template>
    <template #content>
      <a-space :direction="'vertical'" :size="20" :class="isDark ? 'in-user-info' : 'out-user-info'">
        <a-descriptions :size="'large'" :data="data" title="基础信息" :column="{ xs: 1, md: 2, lg: 2 }">
          <a-descriptions-item v-for="item of data" :label="item.label" :key="item.label">
            <a-tag>{{ item.value }}</a-tag>
          </a-descriptions-item>
        </a-descriptions>
        <a-descriptions :size="'large'" :data="interestData" title="兴趣爱好" :column="{ xs: 1, md: 2, lg: 2 }">
          <a-descriptions-item v-for="item of interestData" :label="item.label" :key="item.label">
            <a-tag>{{ item.value }}</a-tag>
          </a-descriptions-item>
        </a-descriptions>
        <a-descriptions :size="'large'" :data="playData" title="运动爱好" :column="{ xs: 1, md: 2, lg: 2 }">
          <a-descriptions-item v-for="item of playData" :label="item.label" :key="item.label">
            <a-tag>{{ item.value }}</a-tag>
          </a-descriptions-item>
        </a-descriptions>
      </a-space>
    </template>
  </DefaultLayout>
</template>


<style lang='less' scoped>
:deep(.arco-descriptions-item-label) {
  font-size: 20px;
  font-weight: bold;
}

:deep(.arco-descriptions-item-value) {
  font-size: 20px !important;
}

:deep(.arco-tag-size-medium) {
  font-size: 14px;
}

:deep(.arco-descriptions-item-label-block) {
  color: inherit !important;
}

.in-user-info {
  -webkit-animation: fade-in-right 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation: fade-in-right 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

.out-user-info {
  -webkit-animation: fade-in-left 0.6s;
  animation: fade-in-left 0.6s;
}

/**
 * ----------------------------------------
 * animation fade-in-right
 * ----------------------------------------
 */
@-webkit-keyframes fade-in-right {
  0% {
    -webkit-transform: translateX(50px);
    transform: translateX(50px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-in-right {
  0% {
    -webkit-transform: translateX(50px);
    transform: translateX(50px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}


/**
 * ----------------------------------------
 * animation fade-in-left
 * ----------------------------------------
 */
@-webkit-keyframes fade-in-left {
  0% {
    -webkit-transform: translateX(-50px);
    transform: translateX(-50px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-in-left {
  0% {
    -webkit-transform: translateX(-50px);
    transform: translateX(-50px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
</style>