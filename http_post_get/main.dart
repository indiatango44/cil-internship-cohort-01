import 'package: flutter/material.dart';

void main() {
    runApp(myApp());

}
class myAPP extends StatefulWidget {
  myAPP({Key? key}) : super(key: key);

  @override
  _myAPPState createState() => _myAPPState();
}

class _myAPPState extends State<myAPP> {

   final url = https://jsonplaceholder.typicode.com/todos

   void fetchPosts() async {
    get(uri.parse(url));
  }

   @override
  Widget build(BuildContext context) {
    return Container();
  }
}
