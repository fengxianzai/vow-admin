<template>
  <div class="login-container">
    <el-form class="login-form">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>

      <!-- 用户名 -->
      <el-form-item pro="username">
        <span class="svg-container">
          <el-icon>
            <Avatar />
          </el-icon>
        </span>
        <el-input placeholder="username" name="username" type="text" />
      </el-form-item>

      <!-- 密码 -->
      <el-form-item pro="password">
        <span class="svg-container">
          <el-icon>
            <Avatar />
          </el-icon>
        </span>
        <el-input placeholder="password" name="password" />
        <span class="show-pwd">
          <el-icon>
            <Avatar />
          </el-icon>
        </span>
      </el-form-item>

      <!-- 登录按钮 -->
      <el-button type="primary" style="width: 100%; margin-bottom: 30px"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script>
import { Avatar } from '@element-plus/icons'
export default {}
</script>

<style scoped></style>
