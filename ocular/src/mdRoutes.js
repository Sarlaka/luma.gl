/* eslint-disable max-len */
import apiReference from '../../docs/api-reference/README.md';
import animationLoop from '../../docs/api-reference/core/animation-loop.md';
import buffer from '../../docs/api-reference/webgl/buffer.md';
import geometry from '../../docs/api-reference/core/geometry.md';
import model from '../../docs/api-reference/core/model.md';
import cone from '../../docs/api-reference/models/cone.md';
import cube from '../../docs/api-reference/models/cube.md';
import cylinder from '../../docs/api-reference/models/cylinder.md';
import icoSphere from '../../docs/api-reference/models/ico-sphere.md';
import plane from '../../docs/api-reference/models/plane.md';
import sphere from '../../docs/api-reference/models/sphere.md';
import program from '../../docs/api-reference/webgl/program.md';
import query from '../../docs/api-reference/webgl/query.md';
import renderbuffer from '../../docs/api-reference/webgl/renderbuffer.md';
import resource from '../../docs/api-reference/webgl/resource.md';
import sampler from '../../docs/api-reference/webgl/sampler.md';
import shader from '../../docs/api-reference/webgl/shader.md';
import shaderCache from '../../docs/api-reference/shadertools/shader-cache.md';
import shadertools from '../../docs/api-reference/shadertools/README.md';
import shadertoolsPicking from '../../docs/api-reference/shadertools/shadertools-picking.md';
import texture from '../../docs/api-reference/webgl/texture.md';
import texture2d from '../../docs/api-reference/webgl/texture-2d.md';
import texture2dArray from '../../docs/api-reference/webgl/texture-2d-array.md';
import texture3d from '../../docs/api-reference/webgl/texture-3d.md';
import textureCube from '../../docs/api-reference/webgl/texture-cube.md';
import transformFeedback from '../../docs/api-reference/webgl/transform-feedback.md';
import uniformBufferLayout from '../../docs/api-reference/webgl/uniform-buffer-layout.md';
import vertexArray from '../../docs/api-reference/webgl/vertex-array.md';
import context from '../../docs/api-reference/webgl/context/context.md';
import contextIsWebGL2 from '../../docs/api-reference/webgl/context/is-webGL2.md';
import contextHasFeatures from '../../docs/api-reference/webgl/context-features/has-features.md';
import contextGetFeatures from '../../docs/api-reference/webgl/context-features/get-features.md';
import contextGetContextInfo from '../../docs/api-reference/webgl/context-limits/get-context-info.md';
import contextGetContextLimits from '../../docs/api-reference/webgl/context-limits/get-context-limits.md';
import contextGetParameters from '../../docs/api-reference/webgl/context-state/get-parameters.md';
import contextResetParameters from '../../docs/api-reference/webgl/context-state/reset-parameters.md';
import contextWithParameters from '../../docs/api-reference/webgl/context-state/with-parameters.md';

import README from '../../docs/README.md';
import whatsNew from '../../docs/whats-new.md';
import upgradeGuide from '../../docs/upgrade-guide.md';
import getStarted from '../../docs/get-started/README.md';
import installation from '../../docs/get-started/installation.md';
import examples from '../../docs/get-started/examples.md';
import usingWithDeckgl from '../../docs/get-started/using-with-deckgl.md';
import usingWithNode from '../../docs/get-started/using-with-node.md';
import debugging from '../../docs/get-started/debugging.md';

import {
  InstancingDemo,
  CubemapDemo,
  //  CustomPickingDemo,
  //  DeferredRenderingDemo,
  MandelbrotDemo,
  FragmentDemo,
  //  ParticlesDemo,
  //  PersistenceDemo,
  PickingDemo,
  ShadowmapDemo,
  TransformFeedbackDemo,

  Lesson01,
  Lesson02,
  Lesson03,
  Lesson04,
  Lesson05,
  Lesson06,
  Lesson07,
  Lesson08,
  Lesson09,
  Lesson10,
  Lesson11,
  Lesson16
} from './react-demos';

export default [
  {
    name: 'Examples',
    path: '/examples',
    data: [{
      name: 'Showcases',
      children: [
        {
          name: 'Cubemap',
          component: CubemapDemo
        },
        // {
        //   name: 'Custom Picking',
        //   component: CustomPicking,
        // },
        {
          name: 'Fragment',
          component: FragmentDemo
        },
        {
          name: 'Instancing',
          component: InstancingDemo
        },
        {
          name: 'Mandelbrot',
          component: MandelbrotDemo
        },
        {
          name: 'Picking',
          component: PickingDemo
        },
        // {
        //   name: 'DeferredRendering',
        // component: DeferredRendering,
        // {
        //   name: 'Particles',
        // component: Particles,
        // {
        //   name: 'Persistence',
        // component: Persistence,
        {
          name: 'Shadowmap',
          component: ShadowmapDemo
        },
        {
          name: 'Transform Feedback',
          component: TransformFeedbackDemo
        }
      ]
    }, {
      name: 'WebGL Lessons',
      children: [
        {
          name: 'Lesson 01 - Drawing',
          component: Lesson01
        },
        {
          name: 'Lesson 02 - Color',
          component: Lesson02
        },
        {
          name: 'Lesson 03 - Movement',
          component: Lesson03
        },
        {
          name: 'Lesson 04 - 3D Objects',
          component: Lesson04
        },
        {
          name: 'Lesson 05 - Textures',
          component: Lesson05
        },
        {
          name: 'Lesson 06 - Texture Filters',
          component: Lesson06
        },
        {
          name: 'Lesson 07 - Lighting',
          component: Lesson07
        },
        {
          name: 'Lesson 08 - Transparency',
          component: Lesson08
        },
        {
          name: 'Lesson 09 - Moving Objects',
          component: Lesson09
        },
        {
          name: 'Lesson 10',
          component: Lesson10
        },
        {
          name: 'Lesson 11',
          component: Lesson11
        },
        // {
        //   name: 'Lesson 12',
        // component: 'Lesson12,
        // {
        //   name: 'Lesson 13',
        // component: 'Lesson13,
        // {
        //   name: 'Lesson 14',
        // component: 'Lesson14,
        // {
        //   name: 'Lesson 15',
        // component: 'Lesson15
        {
          name: 'Lesson 16 - Render to Texture',
          component: Lesson16
        }
      ]
    }]
  }, {
    name: 'Documentation',
    path: '/docs',
    data: [
      {
        name: 'Overview',
        children: [
          {
            name: 'Introduction',
            markdown: README
          },
          {
            name: 'What\'s New',
            markdown: whatsNew
          },
          {
            name: 'Upgrade Guide',
            markdown: upgradeGuide
          }
        ]
      },
      {
        name: 'Getting Started',
        children: [
          {
            name: 'Overview',
            markdown: getStarted
          },
          {
            name: 'Installation',
            markdown: installation
          },
          {
            name: 'Examples',
            markdown: examples
          },
          {
            name: 'Using with deck.gl',
            markdown: usingWithDeckgl
          },
          {
            name: 'Using with Node.js',
            markdown: usingWithNode
          },
          {
            name: 'Debugging',
            markdown: debugging
          }
          // {
          //   name: 'Using with other Frameworks',
          //   content: 'get-started/using-with-other-frameworks.md'
          // }
        ]
      },
      // ,
      // {
      //   name: 'Advanced',
      //   children: [
      //     {
      //       name: 'Roadmap',
      //       content: 'user-guide/extensions.md'
      //     },
      //     {
      //       name: 'Extensions',
      //       content: 'user-guide/extensions.md'
      //     },
      // {
      //   name: 'WebGL2',
      //   content: 'user-guide/webgl2.md'
      // },
      // {
      //   name: 'GPGPU Programming',
      //   content: 'user-guide/gpgpu.md'
      // }
      //   ]
      // },
      {
        name: 'API Reference',
        children: [
          {
            name: 'Introduction',
            markdown: apiReference
          },
          {
            name: 'AnimationLoop',
            markdown: animationLoop
          },
          {
            name: 'Buffer',
            markdown: buffer
          },
          {
            name: 'Geometry',
            markdown: geometry
          },
          // {
          //   name: 'Group',
          //   markdown: group
          // },
          {
            name: 'Model',
            markdown: model
          },
          {
            name: 'Model:Cone',
            markdown: cone
          },
          {
            name: 'Model:Cube',
            markdown: cube
          },
          {
            name: 'Model:Cylinder',
            markdown: cylinder
          },
          {
            name: 'Model:IcoSphere',
            markdown: icoSphere
          },
          {
            name: 'Model:Plane',
            markdown: plane
          },
          {
            name: 'Model:Sphere',
            markdown: sphere
          },
          // {
          //   name: 'Object3d',
          //  core/object-3d,
          // },
          // {
          //   name: 'Picking',
          //  picking/picking,
          // },
          {
            name: 'Program',
            markdown: program
          },
          {
            name: 'Query',
            markdown: query
          },
          {
            name: 'Renderbuffer',
            markdown: renderbuffer
          },
          {
            name: 'Resource',
            markdown: resource
          },
          {
            name: 'Sampler',
            markdown: sampler
          },
          {
            name: 'Shader',
            markdown: shader
          },
          {
            name: 'ShaderCache',
            markdown: shaderCache
          },
          {
            name: 'Shader Modules',
            markdown: shadertools
          },
          {
            name: 'Shader Module:picking',
            markdown: shadertoolsPicking
          },
          {
            name: 'Texture',
            markdown: texture
          },
          {
            name: 'Texture2D',
            markdown: texture2d
          },
          {
            name: 'Texture2DArray',
            markdown: texture2dArray
          },
          {
            name: 'Texture3D',
            markdown: texture3d
          },
          {
            name: 'TextureCube',
            markdown: textureCube
          },
          {
            name: 'TransformFeedback',
            markdown: transformFeedback
          },
          {
            name: 'UniformBufferLayout',
            markdown: uniformBufferLayout
          },
          {
            name: 'VertexArray',
            markdown: vertexArray
          },
          {
            name: 'createGLContext',
            markdown: context
          },
          {
            name: 'isWebGL2',
            markdown: contextIsWebGL2
          },
          {
            name: 'hasFeature(s)',
            markdown: contextHasFeatures
          },
          {
            name: 'getFeatures',
            markdown: contextGetFeatures
          },
          {
            name: 'getContextInfo',
            markdown: contextGetContextInfo
          },
          {
            name: 'getContextLimits',
            markdown: contextGetContextLimits
          },
          {
            name: 'get|setParameter(s)',
            markdown: contextGetParameters
          },
          {
            name: 'resetParameters',
            markdown: contextResetParameters
          },
          {
            name: 'withParameters',
            markdown: contextWithParameters
          }
        ]
      }
    ]
  }
];
