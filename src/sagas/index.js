import surfaceColoursSaga from './surfaceColoursSaga'
import edgeColoursSaga from './edgeColoursSaga'

export default function* rootSaga() {
  yield [edgeColoursSaga(), surfaceColoursSaga()]
  // yield edgeColoursSaga()
}
