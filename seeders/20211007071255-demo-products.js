
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        name: "阿嬤的蘋果派",
        desc	: '阿嬤的蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派蘋果派',
        img_url: 'https://upload.cc/i1/2021/10/07/HGPxcs.jpg',
        price: 160,
        market_price:'160',
        limited: 15,
        is_deleted: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "我的梅果花園",
        desc	: '我的梅果花園梅果花園梅果花園梅果花園梅果花園梅果花園梅果花園梅果花園梅果花園梅果花園梅果花園梅果花園梅果花園梅果花園梅果花園梅果花園梅果花園梅果花園梅果花園梅果花園梅果花園梅果花園梅果花園梅果花園梅果花園',
        img_url: 'https://upload.cc/i1/2021/10/07/3vrSJx.jpg',
        price: 180,
        market_price:'180',
        limited: 20,
        is_deleted: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "青春橘子派",
        desc	: '青春橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派橘子派',
        img_url: 'https://upload.cc/i1/2021/10/07/gqtB8l.jpg',
        price: 260,
        market_price:'160',
        limited: 30,
        is_deleted: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "藍莓珠寶盒",
        desc	: '藍莓藍莓珠寶盒藍莓珠寶盒藍莓珠寶盒藍莓珠寶盒藍莓珠寶盒藍莓珠寶盒藍莓珠寶盒藍莓珠寶盒藍莓珠寶盒藍莓珠寶盒藍莓珠寶盒藍莓珠寶盒藍莓珠寶盒藍莓珠寶盒藍莓珠寶盒藍莓珠寶盒藍莓珠寶盒藍莓珠寶盒藍莓珠寶盒藍莓珠寶盒藍莓珠寶盒藍莓珠寶盒藍莓珠寶盒藍莓珠寶盒藍莓珠寶盒藍莓珠寶盒',
        img_url: 'https://upload.cc/i1/2021/10/07/PdnSq5.jpg',
        price: 100,
        market_price:'100',
        limited: 45,
        is_deleted: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {})
  }
};