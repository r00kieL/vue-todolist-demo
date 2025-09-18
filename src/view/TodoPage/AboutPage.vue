<script setup>
import avatar from '@/assets/images/头像.jpg';
import bilibiliIcon from '@/assets/images/icons/bilibili-line.png';
import githubIcon from '@/assets/images/icons/github-fill.png';
import redNoteIcon from '@/assets/images/icons/rednote.png';
</script>

<template>
  <div class="container">
    <header>
      <div class="site-branding">
        <img :src="avatar" alt="人物头像">
        <span>Ryovik</span>
      </div>

      <nav class="site-nav">
        <ul>
          <li><a href="https://space.bilibili.com/13803685?spm_id_from=333.788.0.0">
            <img :src="bilibiliIcon" alt="bilibili-icon">
          </a></li>
          <li><a href="https://github.com/r00kieL">
            <img :src="githubIcon" alt="github-icon">
          </a></li>
          <li><a href="https://www.xiaohongshu.com/user/profile/63f4ddd1000000000f0136bc">
            <img :src="redNoteIcon" alt="rednote-icon">
          </a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="intro">
        <h2>关于我</h2>
        <p>你好，我是 Ryovik，一名正在学习前端开发的大学生。</p>
        <p>我喜欢把技术和哲学结合起来，做一些带有美学气质的小项目。</p>
      </section>
    </main>


    <footer><p>Powered by Vue</p></footer>
  </div>
</template>

<style scoped>
.container {
  width: 800px;
  height: 400px;

  border-radius: 10px;

  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);

  padding: 20px;

  display: grid;
  grid-template-rows: 2fr 2fr 1fr;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-branding {
  display: flex;
  align-items: center;
  gap: 20px
}

.site-branding img {
  width: 100px;
  height: 100px;

  border-radius: 50%;
}

.site-branding span {
  font-size: 50px;
}

.site-nav ul {
  display: flex;
  gap: 15px;
}

.site-nav ul li img {
  width: 50px;
  height: 50px;
}

main{
  /*background-color: red;*/
}
footer{
  /*background-color: blue;*/

  display: flex;
  justify-content: center;
  align-items: flex-end;
}
</style>