"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var articles = [{
  id: '1',
  title: "main titel",
  author: 'orel',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu lorem faucibus, bibendum leo ac, ultrices ipsum. Donec aliquet ligula sem, eu luctus nisl euismod nec. Vestibulum at ornare lacus. Maecenas nec eleifend nulla. Nulla viverra hendrerit mauris, ac dapibus risus efficitur a. Etiam commodo neque id massa posuere interdum. Praesent sit amet lectus vel risus lacinia viverra a non arcu. Maecenas congue, mi id gravida hendrerit, velit metus molestie dui, vitae dictum urna orci ut sem. Aliquam orci metus, vulputate vel varius id, sollicitudin eget ex. Curabitur metus mauris, dapibus quis aliquet in, hendrerit nec mauris. Quisque viverra metus vitae mi efficitur semper eget sit amet mi. Integer non faucibus est, nec interdum velit. Praesent sagittis purus in leo sagittis, vitae consequat ante porta. In sagittis erat lorem, sit amet porttitor ex condimentum id. Pellentesque tincidunt porta odio et blandit. Vivamus ut metus non ex tempor feugiat.'
}, {
  id: '2',
  title: "main titel",
  author: 'orel',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu lorem faucibus, bibendum leo ac, ultrices ipsum. Donec aliquet ligula sem, eu luctus nisl euismod nec. Vestibulum at ornare lacus. Maecenas nec eleifend nulla. Nulla viverra hendrerit mauris, ac dapibus risus efficitur a. Etiam commodo neque id massa posuere interdum. Praesent sit amet lectus vel risus lacinia viverra a non arcu. Maecenas congue, mi id gravida hendrerit, velit metus molestie dui, vitae dictum urna orci ut sem. Aliquam orci metus, vulputate vel varius id, sollicitudin eget ex. Curabitur metus mauris, dapibus quis aliquet in, hendrerit nec mauris. Quisque viverra metus vitae mi efficitur semper eget sit amet mi. Integer non faucibus est, nec interdum velit. Praesent sagittis purus in leo sagittis, vitae consequat ante porta. In sagittis erat lorem, sit amet porttitor ex condimentum id. Pellentesque tincidunt porta odio et blandit. Vivamus ut metus non ex tempor feugiat.'
}, {
  id: '3',
  title: "main titel",
  author: 'orel',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu lorem faucibus, bibendum leo ac, ultrices ipsum. Donec aliquet ligula sem, eu luctus nisl euismod nec. Vestibulum at ornare lacus. Maecenas nec eleifend nulla. Nulla viverra hendrerit mauris, ac dapibus risus efficitur a. Etiam commodo neque id massa posuere interdum. Praesent sit amet lectus vel risus lacinia viverra a non arcu. Maecenas congue, mi id gravida hendrerit, velit metus molestie dui, vitae dictum urna orci ut sem. Aliquam orci metus, vulputate vel varius id, sollicitudin eget ex. Curabitur metus mauris, dapibus quis aliquet in, hendrerit nec mauris. Quisque viverra metus vitae mi efficitur semper eget sit amet mi. Integer non faucibus est, nec interdum velit. Praesent sagittis purus in leo sagittis, vitae consequat ante porta. In sagittis erat lorem, sit amet porttitor ex condimentum id. Pellentesque tincidunt porta odio et blandit. Vivamus ut metus non ex tempor feugiat.'
}, {
  id: '4',
  title: "main titel",
  author: 'orel',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu lorem faucibus, bibendum leo ac, ultrices ipsum. Donec aliquet ligula sem, eu luctus nisl euismod nec. Vestibulum at ornare lacus. Maecenas nec eleifend nulla. Nulla viverra hendrerit mauris, ac dapibus risus efficitur a. Etiam commodo neque id massa posuere interdum. Praesent sit amet lectus vel risus lacinia viverra a non arcu. Maecenas congue, mi id gravida hendrerit, velit metus molestie dui, vitae dictum urna orci ut sem. Aliquam orci metus, vulputate vel varius id, sollicitudin eget ex. Curabitur metus mauris, dapibus quis aliquet in, hendrerit nec mauris. Quisque viverra metus vitae mi efficitur semper eget sit amet mi. Integer non faucibus est, nec interdum velit. Praesent sagittis purus in leo sagittis, vitae consequat ante porta. In sagittis erat lorem, sit amet porttitor ex condimentum id. Pellentesque tincidunt porta odio et blandit. Vivamus ut metus non ex tempor feugiat.'
}, {
  id: '5',
  title: "main titel",
  author: 'orel',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu lorem faucibus, bibendum leo ac, ultrices ipsum. Donec aliquet ligula sem, eu luctus nisl euismod nec. Vestibulum at ornare lacus. Maecenas nec eleifend nulla. Nulla viverra hendrerit mauris, ac dapibus risus efficitur a. Etiam commodo neque id massa posuere interdum. Praesent sit amet lectus vel risus lacinia viverra a non arcu. Maecenas congue, mi id gravida hendrerit, velit metus molestie dui, vitae dictum urna orci ut sem. Aliquam orci metus, vulputate vel varius id, sollicitudin eget ex. Curabitur metus mauris, dapibus quis aliquet in, hendrerit nec mauris. Quisque viverra metus vitae mi efficitur semper eget sit amet mi. Integer non faucibus est, nec interdum velit. Praesent sagittis purus in leo sagittis, vitae consequat ante porta. In sagittis erat lorem, sit amet porttitor ex condimentum id. Pellentesque tincidunt porta odio et blandit. Vivamus ut metus non ex tempor feugiat.'
}, {
  id: '6',
  title: "main titel",
  author: 'orel',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu lorem faucibus, bibendum leo ac, ultrices ipsum. Donec aliquet ligula sem, eu luctus nisl euismod nec. Vestibulum at ornare lacus. Maecenas nec eleifend nulla. Nulla viverra hendrerit mauris, ac dapibus risus efficitur a. Etiam commodo neque id massa posuere interdum. Praesent sit amet lectus vel risus lacinia viverra a non arcu. Maecenas congue, mi id gravida hendrerit, velit metus molestie dui, vitae dictum urna orci ut sem. Aliquam orci metus, vulputate vel varius id, sollicitudin eget ex. Curabitur metus mauris, dapibus quis aliquet in, hendrerit nec mauris. Quisque viverra metus vitae mi efficitur semper eget sit amet mi. Integer non faucibus est, nec interdum velit. Praesent sagittis purus in leo sagittis, vitae consequat ante porta. In sagittis erat lorem, sit amet porttitor ex condimentum id. Pellentesque tincidunt porta odio et blandit. Vivamus ut metus non ex tempor feugiat.'
}];
var _default = articles;
exports["default"] = _default;