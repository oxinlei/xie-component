<template>
  <FishBone :json="json" :width="1200" :height="500" />
</template>
<script>
import FishBone from '@/components/FishBone'
export default {
  name: 'FishBoneBox',
  components: {
    FishBone
  },
  data() {
    return {
      json: {
        title: 'Incorrect Deliveries',
        size: 18,
        weight: 'Bold',
        children: [
          {
            title: 'Skills',
            size: 14,
            weight: 'Bold',
            children: [
              {
                title: 'knowledge',
                weight: 'Bold',
                children: [
                  {
                    title: 'procedures',
                    children: [{ title: 'documentation' }]
                  },
                  { title: 'products' }
                ]
              },
              { title: 'literacy', weight: 'Bold' }
            ]
          },
          {
            title: 'Procedures',
            size: 14,
            weight: 'Bold',
            children: [
              {
                title: 'manual',
                weight: 'Bold',
                children: [{ title: 'consistency' }]
              },
              {
                title: 'automated',
                weight: 'Bold',
                children: [{ title: 'correctness' }, { title: 'reliability' }]
              }
            ]
          },
          {
            title: 'Communication',
            size: 14,
            weight: 'Bold',
            children: [
              { title: 'ambiguity', weight: 'Bold' },
              {
                title: 'sales staff',
                weight: 'Bold',
                children: [
                  {
                    title: 'order details',
                    children: [{ title: 'lack of knowledge' }]
                  }
                ]
              },
              {
                title: 'telephone orders',
                weight: 'Bold',
                children: [{ title: 'lack of information' }]
              },
              {
                title: 'picking slips',
                weight: 'Bold',
                children: [{ title: 'details' }, { title: 'legibility' }]
              }
            ]
          },
          {
            title: 'Transport',
            size: 14,
            weight: 'Bold',
            children: [
              {
                title: 'information',
                weight: 'Bold',
                children: [
                  { title: 'incorrect person' },
                  {
                    title: 'incorrect addresses',
                    children: [
                      {
                        title: 'customer data base',
                        children: [
                          { title: 'not up-to-date' },
                          { title: 'incorrect program' }
                        ]
                      }
                    ]
                  },
                  { title: 'incorrect dept' }
                ]
              },
              {
                title: 'carriers',
                weight: 'Bold',
                children: [{ title: 'efficiency' }, { title: 'methods' }]
              }
            ]
          }
        ]
      }
    }
  }
}
</script>
