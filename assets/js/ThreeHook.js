import * as THREE from 'three';

export default{
	mounted(){
		const {
			Scene, 
			Mesh, 
			PerspectiveCamera, 
			BoxGeometry, 
			WebGLRenderer, 
			MeshBasicMaterial,
			AxesHelper,
			Group,
			Vector3,
			Clock
		} = THREE
		const canvas = this.el
		const sizes = {width: window.innerWidth, height: window.innerHeight}
		const scene = new Scene()
		const geometry = new BoxGeometry(1,1,1)
		const material = new MeshBasicMaterial({color: 0xff0000})
		const cube = new Mesh(geometry, material)
		const camera = new PerspectiveCamera(75, sizes.width/sizes.height)
		const render = new WebGLRenderer({
			canvas
		})
		camera.position.z = 5

		const group = new Group()

		const cube1 = new Mesh(
			new BoxGeometry(1, 1, 1),
			new MeshBasicMaterial({color: 0xaabbcc})
		)

		const cube2 = new Mesh(
			new BoxGeometry(1, 1, 1),
			new MeshBasicMaterial({color: 0xeeffdd})
		)

		const cube3 = new Mesh(
			new BoxGeometry(1, 1, 1),
			new MeshBasicMaterial({color: 0x008888})
		)

		cube1.position.x = -2
		cube2.position.x = 0
		cube3.position.x = 2

		group.add(cube1, cube2, cube3)

		group.position.y = -1
		group.position.x = 1
		group.position.z = 1

		group.rotation.y = 4

		/*cube.position.x = 0.9,
		cube.position.y = -1.6,
		cube.position.z = 1*/

		cube.position.normalize()

		//cube.position.set(0.5, 1, 1)

		cube.scale.set(2, 0.5, 0.5)

	
		const axes = new AxesHelper()

		scene.add(cube, axes, group)
		render.setSize(sizes.width, sizes.height)

		//cube.rotation.reorder('YXZ')

		//camera.lookAt(new Vector3(1))

		const clock = new Clock()

		function animate () {
		
			const elapsed = clock.getElapsedTime()

			// cube.rotation.x = elapsed
			// cube.rotation.y = elapsed
			// cube.rotation.z = elapsed 

			// cube.position.y = Math.sin(elapsed)
			// cube.position.x = Math.cos(elapsed)
			// cube.position.z = Math.atan(elapsed)

			// cube.scale.set(Math.sin(elapsed), Math.cos(elapsed), Math.atan(elapsed))

			// gsap.to(group.position, {
			// 	duration: 1,
			// 	delay: 1,
			// 	x: Math.cos(elapsed),
			// 	y: Math.sin(elapsed),
			// 	z: Math.atan(elapsed)
			// })

			//camera.lookAt(cube.position)
			
			render.render(scene, camera)
			requestAnimationFrame(animate)
		}
		animate()
	}
}