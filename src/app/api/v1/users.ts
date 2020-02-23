/*
 * @Author: MuRong
 * @Date: 2020-02-19 15:27:35
 * @LastEditors: MuRong
 * @LastEditTime: 2020-02-21 21:41:06
 * @Description:
 * @FilePath: \koa-ts-cms\src\app\api\v1\users.ts
 */
import Router from "koa-router";
import { RegistorValidator } from "../../validators/UsersValidator";
import Users from "../../models/users";
import { Success, Failed } from "../../../core/exception";
import { registerInterface } from '../../lib/interface/UsersInterface';
import UsersService from '../../service/users';

const router: Router = new Router();
router.prefix("/v1/user");

router.post("/register", async ctx => {
  const v: registerInterface = await new RegistorValidator().validate(ctx);
  const r = await UsersService.userRegister(v);
  if (r) {
    throw new Success();
  } else {
    throw new Failed({msg: '注册失败'});
  }
});

module.exports = router;
