<template>
  <!--  -->
  <div>
    <JsonViewCheckbox :data="jsons"></JsonViewCheckbox>
  </div>
</template>
<script>
import JsonViewCheckbox from '@/components/JsonViewCheckbox/index.vue'
export default {
  name: 'JsonViewBox',
  components: { JsonViewCheckbox },
  data() {
    return {
      jsons: {
        name: '武汉船舶职业技术学院',
        logo: '/img/wspc_logo.png',
        backgroundType: 'mainColor',
        mainColor: 'rgba(30, 144, 255, 0.67)',
        gradualColorStart: 'rgba(29, 232, 119, 0.8)',
        gradualColorEnd: 'rgba(30, 144, 255, 0.67)',
        backgroundImages: '/img/logo_bg.png',
        backgroundImagesPosition: '50%',
        backgroundImagesRepeat: 'repeat',
        backgroundImagesColor: 'rgba(30, 144, 255, 0.67)',
        logoHeight: '100%',
        areas: [
          {
            areaId: 1,
            name: '南校区',
            value: '南校区',
            mapTypeList: [{}]
          },
          {
            areaId: 2,
            name: '北校区',
            value: '北校区'
          }
        ],
        module: {
          moduleShowNum: 10,
          position: 'north',
          moduleIconColor: 'rgba(255, 255, 255)',
          items: [
            {
              iconType: 'icon',
              icon: 'el-icon-office-building',
              name: '校园单位',
              config: {
                xtype: 'tree-data-layer',
                url: '/api/geosev/wms/feature/front/tree',
                method: 'get',
                params: {
                  featureTypeId: '935440170249134080',
                  serviceId: '934651115693449216',
                  enable: 1
                },
                context: {
                  url: '/api/univ/branch/detail/',
                  method: 'get'
                }
              }
            },
            {
              iconType: 'icon',
              icon: 'el-icon-guide',
              name: '生活设施',
              config: {
                xtype: 'group-grid-layer',
                url: '/api/geosev/wms/featureType/children/935458756606861312',
                method: 'get',
                gridConfig: {
                  xtype: 'grid-layer',
                  girdType: 'feature-grid-adapte',
                  url: '/api/geosev/wms/feature/list',
                  method: 'get',
                  params: {}
                },
                mapper: {
                  name: 'featureTypeName'
                },
                showNum: 10
              }
            },
            {
              iconType: 'icon',
              icon: 'el-icon-camera',
              name: '校园风光',
              config: {
                xtype: 'image-layer',
                url: '/api/geosev/wms/feature/front/tree',
                method: 'get',
                params: {}
              }
            },
            {
              iconType: 'icon',
              icon: 'el-icon-tickets',
              name: '事务导航',
              config: {
                xtype: 'affair',
                url: '/api',
                method: 'get',
                params: {}
              }
            },
            {
              iconType: 'icon',
              icon: 'el-icon-date',
              name: '活动日程',
              config: {
                xtype: 'events-fullCalendar',
                url: '/api',
                method: 'get',
                params: {}
              }
            },
            {
              iconType: 'icon',
              icon: 'el-icon-picture-outline-round',
              name: '校园实景',
              config: {
                xtype: 'panorama-layer',
                url: 'https://www.klcgis.com/images/sliders/revolution/bg1.jpg',
                method: 'get',
                params: {}
              }
            },
            {
              iconType: 'icon',
              icon: 'el-icon-school',
              name: '核心建筑',
              config: {
                xtype: 'grid-layer',
                girdType: 'feature-grid-adapte',
                url: '/api/geosev/wms/feature/list',
                method: 'get',
                params: {}
              }
            },
            {
              iconType: 'icon',
              icon: 'el-icon-location-information',
              name: '路线导航',
              config: {
                xtype: 'nav-layer',
                girdType: 'feature-grid-adapte',
                url: '/api/geosev/wms/feature/list',
                method: 'get',
                params: {}
              }
            }
          ]
        },

        page: {
          north: {
            height: '64px',
            show: true
          },
          west: {
            width: '400px',
            show: false
          },
          east: {
            width: '400px',
            show: false
          },
          south: {
            height: '50px',
            right: '250px',
            bottom: '60px',
            show: false
          },
          float: {
            show: true,
            items: [
              {
                show: true,
                id: 1,
                xtype: 'query',
                name: '查询栏',
                style: {
                  top: '84px',
                  left: '20px',
                  width: '350px',
                  height: '35px'
                },
                label: {}
              },
              {
                show: true,
                id: 2,
                name: '图层控制',
                xtype: 'map-config-layer',
                style: {
                  bottom: '170px',
                  right: '20px',
                  backgroundColor: 'unset',
                  border: 'unset'
                }
              },
              {
                show: false,
                id: 3,
                name: '模块面板',
                xtype: 'module-layer',
                style: {
                  top: '64px',
                  right: '400px',
                  width: '100px',
                  height: '200px'
                }
              },
              {
                show: true,
                id: 4,
                name: '固定文字',
                xtype: 'text',
                text: '@南京信息工程大学',
                style: {
                  bottom: '20px',
                  right: '220px'
                }
              },
              {
                id: 5,
                show: true,
                xtype: 'map-type-layer',
                name: '地图类型控制面板',
                mapTypeList: [
                  {
                    id: 1,
                    iconType: 'icon',
                    icon: 'icon-layer',
                    name: '图层',
                    show: false
                  },
                  {
                    id: 2,
                    iconType: 'icon',
                    icon: 'icon-gongju',
                    name: '工具箱',
                    show: false,
                    tools: [
                      {
                        show: true,
                        iconType: 'icon',
                        icon: 'icon-map-ruler',
                        name: '测距'
                      },
                      {
                        show: true,
                        iconType: 'icon',
                        icon: 'icon-cemian',
                        name: '测面'
                      }
                    ]
                  }
                ],
                style: {
                  top: '84px',
                  right: '20px'
                }
              },
              {
                id: 6,
                show: true,
                xtype: 'login',
                name: '登录',
                image: '/img/login-img.png',
                url: '',
                style: {
                  top: '0',
                  right: '100px',
                  'z-index': 100
                },
                config: {
                  url: '',
                  method: 'get',
                  params: {}
                },
                information: {
                  show: true,
                  text: '统一身份认证账号登录',
                  iconType: 'icon',
                  icon: 'icon-icon-',
                  url: '',
                  config: {
                    url: '',
                    method: 'get',
                    params: {}
                  }
                }
              },
              {
                id: 7,
                show: true,
                xtype: 'record-number',
                name: '备案号',
                text: '苏公网安备 32100302010246 号',
                image: '/img/keep_on_record.png',
                url: '',
                imageWidth: '20px',
                imageHeight: '20px',
                position: 'login',
                style: {
                  bottom: '0',
                  right: '100px'
                }
              }
            ]
          }
        },
        nav: {
          url: '/api/geosev/nav/campus',
          method: 'post',
          params: {}
        },
        map: {
          center: {
            lng: 119.419115,
            lat: 32.386367
          },
          loadDistanceTool: true,
          loadAreaTool: true,
          openDistanceTool: false,
          openAreaTool: false,
          scale: {
            show: true,
            position: {
              bottom: 20,
              right: 360
            }
          },
          navigation: {
            show: true,
            position: {
              bottom: 20,
              left: 20
            }
          },
          overview: {
            show: true,
            position: {
              bottom: 20,
              right: 20
            },
            size: {
              width: 180,
              height: 140
            }
          },
          compass: {
            show: true,
            img: '/img/compass.png',
            position: {
              bottom: 20,
              left: 50
            }
          },
          layerIcons: [
            {
              mapType: 1,
              image: '/img/20d.png',
              url: '',
              title: '二维地图'
            },
            {
              mapType: 2,
              image: '/img/25d.png',
              url: '',
              title: '三维地图'
            },
            {
              mapType: 4,
              image: '/img/20d.png',
              url: '',
              title: '三维全景'
            },
            {
              mapType: 3,
              image: '/img/20d.png',
              url: '',
              title: '遥感地图'
            }
          ],
          mapLayers: [
            {
              name: '图层',
              show: true,
              xtype: 'geojson',
              isControl: true,
              url: '/api/geosev/wms/features/953958428426149888',
              method: 'get'
            },
            {
              name: '瓦片',
              show: true,
              xtype: 'tile',
              isControl: true,
              collection: {
                type: 'TileLayer',
                id: 'yzu',
                options: {
                  urlTemplate:
                    'https://newgis.yzu.edu.cn/klc-img/map?lyrs=yzu&x={x}&y={y}&z={z}',
                  tms: true,
                  zIndex: -1
                }
              }
            }
          ]
        }
      }
    }
  }
}
</script>
