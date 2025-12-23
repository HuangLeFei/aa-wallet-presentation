import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Wallet, Shield, Zap, Users, Lock, Key, Layers, Sparkles } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [jumpValue, setJumpValue] = useState('1');

  useEffect(() => {
    setJumpValue((currentSlide + 1).toString());
  }, [currentSlide]);

  const slides = [
    {
      title: "账户抽象钱包(AA钱包)深度解析",
      subtitle: "从传统钱包到智能账户的演进之路",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Wallet className="w-32 h-32 text-blue-500" />
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-gray-800">账户抽象钱包</h1>
            <p className="text-2xl text-gray-600">EIP-4337 & EIP-7702 详解</p>
            <p className="text-xl text-gray-500 mt-8">让区块链钱包更智能、更安全、更易用</p>
          </div>
        </div>
      )
    },
    {
      title: "课程大纲",
      content: (
        <div className="space-y-6 p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">分享路线</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">第一部分</h3>
              <ul className="space-y-2 text-lg">
                <li>• 什么是去中心化钱包</li>
                <li>• 传统钱包的工作原理</li>
                <li>• EOA账户的特点与限制</li>
                <li>• 为什么需要账户抽象</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">第二部分</h3>
              <ul className="space-y-2 text-lg">
                <li>• EIP-4337 详解</li>
                <li>• UserOperation 工作流程</li>
                <li>• 智能合约钱包的优势</li>
                <li>• 实际应用案例</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">第三部分</h3>
              <ul className="space-y-2 text-lg">
                <li>• EIP-7702 介绍</li>
                <li>• 与 EIP-4337 的区别</li>
                <li>• 临时授权机制</li>
                <li>• 未来发展方向</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-orange-700 mb-4">第四部分</h3>
              <ul className="space-y-2 text-lg">
                <li>• 两种方案对比</li>
                <li>• 如何选择合适方案</li>
                <li>• Q&A 互动环节</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "什么是去中心化钱包?",
      content: (
        <div className="space-y-8 p-8">
          <h2 className="text-4xl font-bold text-gray-800">去中心化钱包基础概念</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-blue-600 flex items-center gap-3">
                <Key className="w-8 h-8" />
                核心特点
              </h3>
              <div className="bg-blue-50 p-6 rounded-lg space-y-3 text-lg">
                <p><strong>私钥自持:</strong> 用户完全掌控私钥</p>
                <p><strong>去中心化:</strong> 无需信任第三方机构</p>
                <p><strong>资产安全:</strong> 私钥 = 资产所有权</p>
                <p><strong>匿名性:</strong> 地址与身份无强关联</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-purple-600 flex items-center gap-3">
                <Shield className="w-8 h-8" />
                常见类型
              </h3>
              <div className="bg-purple-50 p-6 rounded-lg space-y-3 text-lg">
                <p><strong>软件钱包:</strong> MetaMask, Trust Wallet</p>
                <p><strong>硬件钱包:</strong> Ledger, Trezor</p>
                <p><strong>纸钱包:</strong> 离线存储私钥</p>
                <p><strong>多签钱包:</strong> 需要多个签名</p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <p className="text-xl text-gray-700">
              <strong>重要提醒:</strong> "Not your keys, not your coins" - 私钥丢失 = 资产永久丢失!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "传统钱包的工作原理",
      content: (
        <div className="space-y-6 p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">EOA (外部拥有账户) 工作流程</h2>
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-lg">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">1</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">生成私钥</h3>
                  <p className="text-gray-700">256位随机数,通过助记词(12-24个单词)备份</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">2</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">派生公钥</h3>
                  <p className="text-gray-700">通过椭圆曲线加密(ECDSA)从私钥生成公钥</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">3</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">生成地址</h3>
                  <p className="text-gray-700">对公钥进行Keccak-256哈希,取后20字节 (0x开头的42字符)</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">4</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">交易签名</h3>
                  <p className="text-gray-700">使用私钥对交易数据签名,广播到网络验证</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-lg text-gray-700 font-mono">
              私钥 → 公钥 → 地址 (单向不可逆)
            </p>
          </div>
        </div>
      )
    },
    {
      title: "EOA账户的限制",
      content: (
        <div className="space-y-6 p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">传统账户的痛点</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-red-50 border-2 border-red-300 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-red-700 mb-4">❌ 安全性问题</h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>• 私钥丢失 = 资产永久丢失</li>
                <li>• 单点故障,无法恢复</li>
                <li>• 私钥泄露 = 全部资产被盗</li>
                <li>• 无法设置交易限额</li>
              </ul>
            </div>
            <div className="bg-red-50 border-2 border-red-300 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-red-700 mb-4">❌ 使用体验差</h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>• 必须持有ETH支付Gas</li>
                <li>• 每笔交易都需手动确认</li>
                <li>• 无法批量操作</li>
                <li>• 不支持社交恢复</li>
              </ul>
            </div>
            <div className="bg-red-50 border-2 border-red-300 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-red-700 mb-4">❌ 功能受限</h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>• 无法自定义验证逻辑</li>
                <li>• 不支持多签名方案</li>
                <li>• 无法设置白名单</li>
                <li>• 不支持定时交易</li>
              </ul>
            </div>
            <div className="bg-red-50 border-2 border-red-300 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-red-700 mb-4">❌ 对新手不友好</h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>• 助记词太难记忆</li>
                <li>• Gas费用机制复杂</li>
                <li>• 操作失误无法撤回</li>
                <li>• 学习成本高</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "为什么需要账户抽象?",
      content: (
        <div className="space-y-8 p-8">
          <h2 className="text-4xl font-bold text-gray-800">账户抽象 = 更智能的钱包</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
              <Shield className="w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold mb-3">更安全</h3>
              <ul className="space-y-2">
                <li>• 多签名保护</li>
                <li>• 社交恢复</li>
                <li>• 交易限额</li>
                <li>• 冻结功能</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg">
              <Zap className="w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold mb-3">更便捷</h3>
              <ul className="space-y-2">
                <li>• Gas代付</li>
                <li>• 批量交易</li>
                <li>• 自动化操作</li>
                <li>• 无需持有ETH</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg">
              <Sparkles className="w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold mb-3">更灵活</h3>
              <ul className="space-y-2">
                <li>• 自定义逻辑</li>
                <li>• 可升级性</li>
                <li>• 权限管理</li>
                <li>• 会话密钥</li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-lg border-2 border-orange-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">核心理念</h3>
            <p className="text-xl text-gray-700">
              将钱包从简单的"私钥容器"升级为"可编程智能账户",像使用传统银行APP一样使用Web3钱包,但保留去中心化的优势。
            </p>
          </div>
        </div>
      )
    },
    {
      title: "EIP-4337 概述",
      content: (
        <div className="space-y-6 p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">EIP-4337: 账户抽象标准方案</h2>
          <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-300">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center text-2xl font-bold">📋</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">提案信息</h3>
                  <p className="text-lg text-gray-700">2021年9月提出,2023年3月主网部署</p>
                  <p className="text-lg text-gray-700">作者: Vitalik Buterin, Yoav Weiss等</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center text-2xl font-bold">🎯</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">核心目标</h3>
                  <p className="text-lg text-gray-700">在不修改以太坊共识层的前提下</p>
                  <p className="text-lg text-gray-700">
                    允许智能合约钱包像外部账户（EOA）一样工作，实现更灵活的签名、批量交易、社交恢复等功能，大幅降低Web3用户门槛。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center text-2xl font-bold">⚙️</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">实现方式</h3>
                  <p className="text-lg text-gray-700">引入独立的Mempool和新的交易类型 UserOperation</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-3">✅ 优势</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 无需硬分叉</li>
                <li>• 向后兼容</li>
                <li>• 灵活性高</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-700 mb-3">⚠️ 特点</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 需要部署智能合约</li>
                <li>• 依赖Bundler基础设施</li>
                <li>• Gas成本稍高</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "EIP-4337 核心组件",
      content: (
        <div className="space-y-6 p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">四大核心组件</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-100 p-6 rounded-lg border-2 border-blue-400">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">1. UserOperation(用户操作)</h3>
              <p className="text-lg text-gray-700 mb-3">类似于交易,但包含更多信息</p>
              <div className="bg-white p-4 rounded text-sm font-mono">
                <p>sender: 钱包地址</p>
                <p>nonce: 防重放</p>
                <p>callData: 执行数据</p>
                <p>signature: 签名</p>
                <p>paymasterAndData: Gas代付</p>
                <p>...</p>
              </div>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg border-2 border-purple-400">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">2. Bundler(打包器)</h3>
              <p className="text-lg text-gray-700 mb-3">负责打包和提交 UserOperation</p>
              <ul className="space-y-2 text-gray-700">
                <li>• 监听 UserOp Mempool</li>
                <li>• 验证 UserOperation</li>
                <li>• 打包多个UserOp</li>
                <li>• 提交到EntryPoint</li>
              </ul>
            </div>
            <div className="bg-green-100 p-6 rounded-lg border-2 border-green-400">
              <h3 className="text-2xl font-bold text-green-700 mb-4">3. EntryPoint(入口点合约)</h3>
              <p className="text-lg text-gray-700 mb-3">全局单例智能合约</p>
              <ul className="space-y-2 text-gray-700">
                <li>• 验证UserOperation</li>
                <li>• 执行用户操作</li>
                <li>• 处理Gas支付</li>
                <li>• 地址: 0x5FF...002</li>
              </ul>
            </div>
            <div className="bg-orange-100 p-6 rounded-lg border-2 border-orange-400">
              <h3 className="text-2xl font-bold text-orange-700 mb-4">4. Paymaster(支付赞助者)</h3>
              <p className="text-lg text-gray-700 mb-3">Gas费用赞助者(可选)</p>
              <ul className="space-y-2 text-gray-700">
                <li>• 代付Gas费用</li>
                <li>• ERC-20代币支付</li>
                <li>• 订阅制Gas</li>
                <li>• 活动补贴</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "EIP-4337 工作流程",
      content: (
        <div className="space-y-6 p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">UserOperation 完整生命周期</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
            <div className="space-y-4">
              {[
                { num: 1, title: "用户创建操作", desc: "用户在钱包界面发起转账/交互", color: "bg-blue-500" },
                { num: 2, title: "构建UserOperation", desc: "钱包将操作打包成UserOperation格式", color: "bg-blue-600" },
                { num: 3, title: "签名", desc: "使用私钥或其他验证方式对UserOp签名", color: "bg-purple-500" },
                { num: 4, title: "发送到Mempool", desc: "UserOp被发送到专用的UserOp Mempool", color: "bg-purple-600" },
                { num: 5, title: "Bundler打包", desc: "Bundler从Mempool中选择多个UserOp打包", color: "bg-pink-500" },
                { num: 6, title: "验证阶段", desc: "EntryPoint验证每个UserOp的有效性", color: "bg-pink-600" },
                { num: 7, title: "执行阶段", desc: "EntryPoint调用钱包合约执行操作", color: "bg-red-500" },
                { num: 8, title: "Gas结算", desc: "Paymaster(如有)支付Gas,或从钱包扣除", color: "bg-red-600" }
              ].map((step) => (
                <div key={step.num} className="flex items-center gap-4">
                  <div className={`${step.color} text-white rounded-full w-14 h-14 flex-shrink-0 flex items-center justify-center text-xl font-bold`}>
                    {step.num}
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-lg shadow">
                    <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "EOA vs. EIP-4337 交易时序对比",
      content: (
        <div className="space-y-6 p-8 h-full flex flex-col">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-mono">EOA</span>
                传统交易流程
              </h3>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 space-y-3">
                <p className="flex items-center gap-2 text-gray-700">
                  <span className="text-blue-500 font-bold">●</span> 单层验证：签名校验即执行
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <span className="text-blue-500 font-bold">●</span> 紧耦合：账户与密钥绑定
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <span className="text-blue-500 font-bold">●</span> 一笔交易 = 一个原子指令
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-mono">AA</span>
                EIP-4337 交易流程
              </h3>
              <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 space-y-3">
                <p className="flex items-center gap-2 text-gray-700">
                  <span className="text-blue-500 font-bold">●</span> 双层分离：验证逻辑与执行逻辑解耦
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <span className="text-blue-500 font-bold">●</span> 意图导向：UserOp 表达“愿景”
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <span className="text-blue-500 font-bold">●</span> 灵活验证：支持多签、OAuth、指纹等
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-0 relative group cursor-pointer mt-4" onClick={() => setFullscreenImage('images/eoa_4337_transactions.png')}>
            <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors rounded-2xl flex items-center justify-center z-10">
              <div className="bg-white/90 px-6 py-3 rounded-full shadow-xl text-blue-600 font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                点击全屏查看高清大图
              </div>
            </div>
            <img
              src="images/eoa_4337_transactions.png"
              alt="EOA vs EIP-4337 Transaction Flow"
              className="w-full h-full object-contain rounded-2xl border border-gray-100 shadow-sm transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>

          <div className="text-center text-gray-500 text-sm italic">
            * 账户抽象的核心在于将“谁签署了交易”与“如何执行资产操作”彻底解耦
          </div>
        </div>
      )
    },
    {
      title: "智能合约钱包的优势",
      content: (
        <div className="space-y-6 p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">EIP-4337 带来的能力</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">🔐 社交恢复</h3>
              <p className="text-lg mb-2">设置3-5位朋友为守护者</p>
              <p className="text-lg">多数同意即可恢复钱包</p>
              <p className="text-sm mt-3 opacity-90">案例: Argent Wallet</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">💰 Gas代付</h3>
              <p className="text-lg mb-2">项目方/Paymaster支付Gas</p>
              <p className="text-lg">用户无需持有ETH</p>
              <p className="text-sm mt-3 opacity-90">案例: Biconomy, Pimlico</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">📦 批量操作</h3>
              <p className="text-lg mb-2">一次性执行多个交易</p>
              <p className="text-lg">授权+转账一步完成</p>
              <p className="text-sm mt-3 opacity-90">节省Gas和时间</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">🔑 会话密钥</h3>
              <p className="text-lg mb-2">临时授权特定权限</p>
              <p className="text-lg">游戏内自动交易</p>
              <p className="text-sm mt-3 opacity-90">无需每次签名</p>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-pink-500 text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">⚡ 多签名</h3>
              <p className="text-lg mb-2">2/3或3/5签名方案</p>
              <p className="text-lg">适合团队资产管理</p>
              <p className="text-sm mt-3 opacity-90">案例: Safe (Gnosis Safe)</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">🛡️ 交易限额</h3>
              <p className="text-lg mb-2">设置每日转账上限</p>
              <p className="text-lg">大额交易需额外验证</p>
              <p className="text-sm mt-3 opacity-90">防止被盗后损失扩大</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "EIP-4337 实际应用",
      content: (
        <div className="space-y-6 p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">真实项目案例</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="text-4xl">👛</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-700 mb-2">Argent</h3>
                  <p className="text-lg text-gray-700 mb-2">移动端智能钱包,主打易用性</p>
                  <p className="text-gray-600">特色: 社交恢复、Gas代付、无助记词</p>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🔒</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-purple-700 mb-2">Safe (Gnosis Safe)</h3>
                  <p className="text-lg text-gray-700 mb-2">多签名钱包,团队资产管理首选</p>
                  <p className="text-lg text-gray-700 mb-2">Safe (原 Gnosis Safe) 管理的数字资产总额已超过 1000 亿美元，支持跨越 14+ 网络，部署了超过 810 万个智能账户，被 Aave、1inch 等 DeFi 巨头使用，表明其安全性与可靠性非常高。 </p>
                  <p className="text-gray-600">特色: 灵活的多签方案、模块化设计</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🚀</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Biconomy</h3>
                  <p className="text-lg text-gray-700 mb-2">专注Gas优化和用户体验</p>
                  <p className="text-gray-600">特色: Gas代付SDK、批量交易、跨链支持</p>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🎮</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-orange-700 mb-2">Web3游戏应用</h3>
                  <p className="text-lg text-gray-700 mb-2">游戏内资产交易无缝体验</p>
                  <p className="text-gray-600">特色: 会话密钥、自动签名、零Gas门槛</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "EIP-7702 介绍",
      content: (
        <div className="space-y-6 p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">EIP-7702: 临时账户抽象方案</h2>
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-lg border-2 border-purple-300">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center text-2xl font-bold">📋</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">提案信息</h3>
                  <p className="text-lg text-gray-700">2024年5月提出,2025年5月7日 Pectra 升级中正式上线</p>
                  <p className="text-lg text-gray-700">作者: Vitalik Buterin, Sam Wilson等</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-pink-500 text-white rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center text-2xl font-bold">🎯</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">核心理念</h3>
                  <p className="text-lg text-gray-700">让EOA账户临时"变身"为智能合约账户</p>
                  <p className="text-lg text-gray-700">无需部署新合约,直接升级现有账户</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-indigo-500 text-white rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center text-2xl font-bold">⚙️</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">实现方式</h3>
                  <p className="text-lg text-gray-700">新交易类型: 授权交易 (Authorization Transaction)</p>
                  <p className="text-lg text-gray-700">临时将代码注入EOA,交易结束后恢复</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-3">✅ 主要优势</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 现有EOA可直接使用</li>
                <li>• 无需部署新合约</li>
                <li>• Gas成本更低</li>
                <li>• 向后兼容性好</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-700 mb-3">⚠️ 限制</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 授权仅在单笔交易有效</li>
                <li>• 需要协议层支持</li>
                <li>• 功能相对受限</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "EIP-7702 工作原理",
      content: (
        <div className="space-y-6 p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">临时授权机制详解</h2>
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg">
            <div className="space-y-4">
              {[
                { num: 1, title: "EOA签署授权", desc: "用户使用EOA私钥签署一个授权消息", detail: "授权将某个智能合约代码临时委托给自己的地址" },
                { num: 2, title: "发起交易", desc: "用户发起一笔特殊类型的交易", detail: "交易中包含授权信息和要执行的操作" },
                { num: 3, title: "临时代码注入", desc: "EVM在执行期间,临时将指定代码注入EOA", detail: "此时EOA表现得像一个智能合约账户" },
                { num: 4, title: "执行智能逻辑", desc: "使用智能合约的逻辑验证和执行操作", detail: "可以实现批量交易、Gas代付等功能" },
                { num: 5, title: "恢复原状", desc: "交易结束后,EOA恢复为普通外部账户", detail: "授权自动失效,不影响账户原有状态" }
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-4">
                  <div className="bg-purple-500 text-white rounded-full w-14 h-14 flex-shrink-0 flex items-center justify-center text-xl font-bold">
                    {step.num}
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-lg shadow">
                    <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                    <p className="text-gray-700">{step.desc}</p>
                    <p className="text-sm text-gray-500 mt-2">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-xl text-gray-800">
              <strong>关键特性:</strong> 授权是"一次性"的,只在当前交易有效,不会永久改变账户性质
            </p>
          </div>
        </div>
      )
    },
    {
      title: "EIP-7702 完整交易执行流程",
      content: (
        <div className="space-y-6 p-8 h-full flex flex-col">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 text-center">
              <Key className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
              <h4 className="font-bold text-indigo-700">1. 授权(Auth)</h4>
              <p className="text-sm text-gray-600">用户签署 Authorization Payload</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 text-center">
              <Layers className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <h4 className="font-bold text-purple-700">2. 注入(Inject)</h4>
              <p className="text-sm text-gray-600">EVM 将代码临时委托给 EOA</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-xl border border-pink-100 text-center">
              <Zap className="w-8 h-8 text-pink-500 mx-auto mb-2" />
              <h4 className="font-bold text-pink-700">3. 执行与销毁</h4>
              <p className="text-sm text-gray-600">执行智能逻辑后自动恢复 EOA</p>
            </div>
          </div>

          <div className="flex-1 min-h-0 relative group cursor-pointer mt-4" onClick={() => setFullscreenImage('images/eip7702_transactions.png')}>
            <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/5 transition-colors rounded-2xl flex items-center justify-center z-10">
              <div className="bg-white/90 px-6 py-3 rounded-full shadow-xl text-indigo-600 font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2 border-2 border-indigo-100">
                <Sparkles className="w-5 h-5" />
                点击放大查看 EIP-7702 完整执行细节
              </div>
            </div>
            <img
              src="images/eip7702_transactions.png"
              alt="EIP-7702 Execution Detail"
              className="w-full h-full object-contain rounded-2xl border border-gray-100 shadow-sm transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>

          <div className="bg-indigo-900/5 p-4 rounded-xl text-sm text-gray-700 border border-indigo-100/50">
            <p className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">💡</span>
              <span><strong>技术解析：</strong> EIP-7702 与 4337 的最大区别在于它<b>不需要</b>预先部署合约。由于是协议层的原生支持，EOA 地址可以直接借用现有合约的代码，极大地降低了 Web3 全民账户抽象化的门槛。</span>
            </p>
          </div>
        </div>
      )
    },
    {
      title: "EIP-4337 vs EIP-7702",
      content: (
        <div className="space-y-6 p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">两种方案对比</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="border-2 border-gray-600 p-4 text-left text-xl">对比维度</th>
                  <th className="border-2 border-gray-600 p-4 text-center text-xl">EIP-4337</th>
                  <th className="border-2 border-gray-600 p-4 text-center text-xl">EIP-7702</th>
                </tr>
              </thead>
              <tbody className="text-lg">
                <tr className="bg-blue-50">
                  <td className="border-2 border-gray-300 p-4 font-semibold">协议层修改</td>
                  <td className="border-2 border-gray-300 p-4 text-center">❌ 不需要</td>
                  <td className="border-2 border-gray-300 p-4 text-center">✅ 需要硬分叉</td>
                </tr>
                <tr>
                  <td className="border-2 border-gray-300 p-4 font-semibold">现有EOA兼容</td>
                  <td className="border-2 border-gray-300 p-4 text-center">❌ 需要新合约</td>
                  <td className="border-2 border-gray-300 p-4 text-center">✅ 直接使用</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border-2 border-gray-300 p-4 font-semibold">Gas成本</td>
                  <td className="border-2 border-gray-300 p-4 text-center">较高 (合约调用)</td>
                  <td className="border-2 border-gray-300 p-4 text-center">较低 (临时授权)</td>
                </tr>
                <tr>
                  <td className="border-2 border-gray-300 p-4 font-semibold">功能持久性</td>
                  <td className="border-2 border-gray-300 p-4 text-center">✅ 永久有效</td>
                  <td className="border-2 border-gray-300 p-4 text-center">❌ 单次交易</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border-2 border-gray-300 p-4 font-semibold">部署状态</td>
                  <td className="border-2 border-gray-300 p-4 text-center">✅ 已上线主网</td>
                  <td className="border-2 border-gray-300 p-4 text-center">✅ 已上线主网</td>
                </tr>
                <tr>
                  <td className="border-2 border-gray-300 p-4 font-semibold">适用场景</td>
                  <td className="border-2 border-gray-300 p-4 text-center">长期钱包方案</td>
                  <td className="border-2 border-gray-300 p-4 text-center">临时增强功能</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border-2 border-gray-300 p-4 font-semibold">基础设施依赖</td>
                  <td className="border-2 border-gray-300 p-4 text-center">Bundler, Paymaster</td>
                  <td className="border-2 border-gray-300 p-4 text-center">原生支持</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      title: "如何选择合适方案?",
      content: (
        <div className="space-y-6 p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">选型建议</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-3xl font-bold mb-6">选择 EIP-4337</h3>
              <div className="space-y-4 text-lg">
                <div className="bg-white bg-opacity-20 p-4 rounded">
                  <p className="font-semibold mb-2">✅ 构建新钱包产品</p>
                  <p className="text-sm opacity-90">从零开始,可以充分利用智能合约功能</p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded">
                  <p className="font-semibold mb-2">✅ 需要复杂功能</p>
                  <p className="text-sm opacity-90">社交恢复、多签名、模块化设计</p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded">
                  <p className="font-semibold mb-2">✅ 企业级应用</p>
                  <p className="text-sm opacity-90">需要长期稳定的账户抽象方案</p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded">
                  <p className="font-semibold mb-2">✅ 追求最大灵活性</p>
                  <p className="text-sm opacity-90">可自定义验证逻辑和执行策略</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-lg">
              <h3 className="text-3xl font-bold mb-6">选择 EIP-7702</h3>
              <div className="space-y-4 text-lg">
                <div className="bg-white bg-opacity-20 p-4 rounded">
                  <p className="font-semibold mb-2">✅ 已有大量EOA用户</p>
                  <p className="text-sm opacity-90">无需迁移,直接升级现有账户</p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded">
                  <p className="font-semibold mb-2">✅ 追求低Gas成本</p>
                  <p className="text-sm opacity-90">避免合约部署和调用开销</p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded">
                  <p className="font-semibold mb-2">✅ 偶尔使用高级功能</p>
                  <p className="text-sm opacity-90">不需要永久的智能合约钱包</p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded">
                  <p className="font-semibold mb-2">✅ 已上线主网</p>
                  <p className="text-sm opacity-90">EIP-7702 是未来趋势</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 border-2 border-yellow-400 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">💡 实践建议</h3>
            <p className="text-xl text-gray-700">
              两种方案不是互斥的! 可以同时支持: 新用户使用EIP-4337创建智能钱包,老用户通过EIP-7702临时获得高级功能。
              <br />
              未来账户抽象的最终形态 = EIP-7702（协议层） + ERC-4337（合约层）共同组成。
              7702 是基础趋势，4337 是生态能力层，两者不会互相替代。
            </p>
          </div>
        </div>
      )
    },
    {
      title: "未来展望",
      content: (
        <div className="space-y-6 p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">账户抽象的未来</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white p-6 rounded-lg">
              <Sparkles className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">短期</h3>
              <ul className="space-y-2">
                <li>• EIP-7702为 EOA 账户提供即时智能合约能力</li>
                <li>• EIP-4337生态成熟</li>
                <li>• 更多钱包集成</li>
                <li>• Gas优化方案</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-400 to-purple-500 text-white p-6 rounded-lg">
              <Layers className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">中期</h3>
              <ul className="space-y-2">
                <li>• 跨链/跨 L2 账户抽象</li>
                <li>• 统一的用户体验</li>
                <li>• AI 赋能的智能钱包</li>
                <li>• 隐私增强方案</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-pink-400 to-pink-500 text-white p-6 rounded-lg">
              <Users className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">长期</h3>
              <ul className="space-y-2">
                <li>• Web2级用户体验</li>
                <li>• 主流应用采用</li>
                <li>• 完全抽象化</li>
                <li>• 十亿级用户</li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-lg border-2 border-green-400 mt-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">🎯 最终目标</h3>
            <p className="text-2xl text-gray-700 mb-4">
              让普通用户使用区块链时,<strong>完全感知不到私钥、Gas费、签名等概念</strong>
            </p>
            <p className="text-xl text-gray-600">
              就像使用支付宝/微信支付一样简单,但享受去中心化、自主权、透明性的优势
            </p>
          </div>
        </div>
      )
    },
    {
      title: "总结与Q&A",
      content: (
        <div className="space-y-8 p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">核心要点回顾</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">传统钱包</h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>✓ EOA账户,私钥控制</li>
                <li>✓ 简单但功能受限</li>
                <li>✗ 私钥丢失无法恢复</li>
                <li>✗ 必须持有ETH支付Gas</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">EIP-4337</h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>✓ 智能合约钱包</li>
                <li>✓ 功能强大,高度可定制</li>
                <li>✓ 已上线可用</li>
                <li>✗ Gas成本稍高</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
              <h3 className="text-2xl font-bold text-green-700 mb-4">EIP-7702</h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>✓ 临时授权机制</li>
                <li>✓ EOA直接使用</li>
                <li>✓ Gas成本低</li>
                <li>✗ 功能有限,单次有效</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-300">
              <h3 className="text-2xl font-bold text-orange-700 mb-4">主要优势</h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>✓ 社交恢复</li>
                <li>✓ Gas代付</li>
                <li>✓ 批量操作</li>
                <li>✓ 更好的安全性</li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-lg border-2 border-orange-400">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">❓ Q&A 互动环节</h3>
            <p className="text-xl text-gray-700 text-center">
              欢迎提问任何关于账户抽象、EIP-4337、EIP-7702的问题!
            </p>
          </div>
          <div className="text-center space-y-4">
            <p className="text-3xl font-bold text-gray-800">感谢聆听!</p>
            <p className="text-xl text-gray-600">让我们一起见证Web3用户体验的革命</p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center py-12 px-4">
      {/* Main Presentation Container */}
      <div className="w-full max-w-5xl flex flex-col bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden">

        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-blue-500 rounded-full" />
            <h1 className="text-xl font-bold text-gray-800 tracking-tight flex items-center gap-2">
              <span className="text-gray-400 font-medium whitespace-nowrap">账户抽象分享</span>
              <span className="text-gray-300">/</span>
              <span className="text-blue-600 truncate">{slides[currentSlide].title}</span>
            </h1>
          </div>
          <div className="bg-white/80 backdrop-blur-md text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2 border border-blue-100 shadow-sm transition-all hover:bg-white">
            <span className="text-gray-400 font-medium">幻灯片</span>
            <div className="relative group/input">
              <input
                type="number"
                min="1"
                max={slides.length}
                value={jumpValue}
                onChange={(e) => setJumpValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const page = parseInt(jumpValue);
                    if (page >= 1 && page <= slides.length) {
                      goToSlide(page - 1);
                    } else {
                      setJumpValue((currentSlide + 1).toString());
                    }
                  }
                }}
                onBlur={() => setJumpValue((currentSlide + 1).toString())}
                className="w-12 h-7 bg-blue-50/50 border border-blue-100 text-center rounded-lg text-blue-600 font-bold focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:bg-white focus:border-blue-400 transition-all shadow-inner"
              />
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/input:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                回车确认跳转
              </div>
            </div>
            <span className="text-gray-400 font-medium">/ {slides.length}</span>
          </div>
        </div>

        {/* Content Area - Flexible Height */}
        <div className="min-h-[500px] relative">
          <div className="p-10">
            {slides[currentSlide].content}
          </div>
        </div>

        {/* Footer / Progress Only */}
        <div className="px-8 py-5 border-t border-gray-100 bg-gray-50 flex items-center justify-center">
          <div className="hidden md:flex gap-1.5 focus:outline-none">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 transition-all rounded-full ${index === currentSlide
                  ? 'bg-blue-500 w-10'
                  : 'bg-gray-300 hover:bg-gray-400 w-3'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Keyboard Shortcuts Hint */}
      <div className="mt-8 text-gray-400 text-sm flex items-center gap-4">
        <span>lfhuang</span>
        <span className="w-1 h-1 bg-gray-300 rounded-full" />
        <span>账户抽象深度解析</span>
      </div>

      {/* Screen Edge Navigation Buttons */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className={`fixed left-12 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-xl border border-gray-100 text-gray-800 transition-all duration-300 z-50 ${currentSlide === 0 ? 'opacity-0 cursor-default' : 'opacity-5 hover:opacity-100'}`}
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 1}
        className={`fixed right-12 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-xl border border-gray-100 text-gray-800 transition-all duration-300 z-50 ${currentSlide === slides.length - 1 ? 'opacity-0 cursor-default' : 'opacity-5 hover:opacity-100'}`}
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center overflow-y-auto p-4 md:p-12 cursor-zoom-out"
          onClick={() => setFullscreenImage(null)}
        >
          <div className="relative max-w-7xl w-full my-auto">
            <img
              src={fullscreenImage}
              alt="Full Transaction Flow"
              className="w-full h-auto rounded-lg shadow-2xl block"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="fixed top-8 right-8 text-white hover:text-gray-300 transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setFullscreenImage(null);
              }}
            >
              <div className="relative w-6 h-6">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white rotate-45"></div>
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white -rotate-45"></div>
              </div>
              <span className="sr-only">关闭</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Presentation;
