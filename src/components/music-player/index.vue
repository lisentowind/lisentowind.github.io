<script lang='ts' setup>
import CSY from '@/assets/music/春三月-司南.mp3'
import RGMYN from '@/assets/music/如果没有你-萧敬腾.mp3'
import logos from '@/assets/images/logos.png'
import { useToggle } from '@vueuse/core'
import {
  IconPlayArrowFill,
  IconSwap,
  IconDoubleRight,
  IconDoubleLeft,
  IconMenuUnfold,
  IconMusic
} from '@arco-design/web-vue/es/icon'
import { ref, watch } from 'vue'
import useTheme from '@/hooks/useTheme'

let time: any = null
const { isDark } = useTheme()
const [play, setPlay] = useToggle(false)
const audio = ref<HTMLAudioElement | null>()
const musicArr = ref<any[]>([
  {
    name: '春三月-司南',
    id: CSY,
    value: CSY
  },
  {
    name: '如果没有你-萧敬腾',
    id: RGMYN,
    value: RGMYN
  }
])
const music = ref(musicArr.value[0].value)
const playMusic = () => {
  if (audio.value) {
    audio.value.play()
    setPlay(true)
    time = setInterval(() => {
      getInfo()
    }, 1000)
  }
}

const pauseMusic = () => {
  if (audio.value) {
    audio.value.pause()
    setPlay(false)
    clearInterval(time)
  }
}
// 总时长
const duration = ref<string>()
// 当前播放时长
const currentTime = ref<string>()
// 播放进度
const progress = ref(0)

const getInfo = () => {
  if (audio.value) {
    // 总时长 转换为 分钟:秒
    duration.value = Math.floor(audio.value.duration / 60) + ':' + Math.floor(audio.value.duration % 60)
    // 当前播放时长 转换为 分钟:秒
    currentTime.value = Math.floor(audio.value.currentTime / 60) + ':' + Math.floor(audio.value.currentTime % 60)
    // 播放进度
    progress.value = Math.floor((audio.value.currentTime / audio.value.duration) * 100)
  }
}

watch(
  () => duration.value,
  (val) => {
    if (val === '0:0') {
      time = setInterval(() => {
        getInfo()
      }, 1000)
    }
    playMusic()
  }
)

const changeMusicList = (prev: boolean) => {
  const index = musicArr.value.findIndex((item) => item === music.value)
  if (prev) {
    music.value = musicArr.value[index - 1].value || musicArr.value[musicArr.value.length - 1].value
  } else {
    music.value = musicArr.value[index + 1].value || musicArr.value[0].value
  }
}

const changeMenuMusicList = (value: string | number | Record<string, any> | undefined) => {
  const index = musicArr.value.findIndex((item) => item.value.match(/[\u4e00-\u9fa5]+/g)?.join() === value)
  music.value = musicArr.value[index].value
}
</script>

<template>
  <div
    class="musicBox"
    :style="{
      color: isDark ? '#fff' : '#000'
    }"
  >
    <a-space>
      <a-image class="img-music" :class="play ? 'trans-img' : ''" :src="logos" :width="54" :preview="false"></a-image>
      <icon-play-arrow-fill class="img-music play" v-if="!play" @click="playMusic" />
      <icon-swap class="img-music swap" :rotate="90" v-else @click="pauseMusic" />

      <a-space>
        <!-- 名字 music正则截取汉字 -->
        <span class="img-music name-music">{{ music.match(/[\u4e00-\u9fa5]+/g)?.join() }}</span>
        <span class="img-music time-music">{{ currentTime ? currentTime : '0:00' }} / {{ duration ? duration : '0:00' }}</span>
        <span class="img-music prev-music" @click="changeMusicList(true)"><icon-double-left /></span>
        <span class="img-music next-music" @click="changeMusicList(false)"><icon-double-right /></span>
        <div class="img-music list-music">
          <a-dropdown trigger="hover" position="tr" @select="changeMenuMusicList">
            <icon-menu-unfold />
            <template #content>
              <a-doption v-for="item in musicArr" :key="item" :value="item.value.match(/[\u4e00-\u9fa5]+/g)?.join()"
                ><template #icon>
                  <icon-music />
                </template>
                {{ item.value.match(/[\u4e00-\u9fa5]+/g)?.join() }}</a-doption
              >
            </template>
          </a-dropdown>
        </div>
      </a-space>
      <audio ref="audio" class="audio-music" :src="music" loop></audio>
    </a-space>
  </div>
</template>


<style lang='less' scoped>
.musicBox,
audio {
  width: 250px !important;
  z-index: 99;
}
.musicBox {
  height: 55px;
  backdrop-filter: blur(10px);
}

.img-music {
  position: absolute;
  top: 0;
  z-index: 999;
  border-radius: 50%;
  backdrop-filter: blur(10px);
  button {
    position: absolute;
    top: 0;
    z-index: 999;
    border-radius: 50%;
  }
}
.trans-img {
  // 自身无限X轴旋转
  animation: rotate 10s linear infinite;
  // 旋转中心
  transform-origin: 50% 50%;
}
@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

.play,
.swap {
  animation: none;
  top: 0;
  left: 10px;
  top: 10px;
  left: 10px;
  font-size: 35px;
  color: rgba(250, 227, 227, 0.868);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    scale: 1.2;
    color: rgb(216, 75, 24);
  }
}
.time-music {
  top: 35px;
  left: 87px;
  font-size: 16px;
}
.name-music {
  top: 3px;
  left: 65px;
  font-size: 18px;
}

.prev-music {
  top: 35px;
  left: 60px;
  font-size: 16px;
  cursor: pointer;
}
.next-music {
  top: 35px;
  left: 180px;
  font-size: 16px;
  cursor: pointer;
}
.list-music {
  top: 35px;
  left: 207px;
  font-size: 16px;
  cursor: pointer;
}
</style>