// Compiled by ClojureScript 0.0-2138
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__16018__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__16017 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__16017,0,null);var body = cljs.core.nthnext.call(null,vec__16017,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__16018 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__16018__delegate.call(this,args);};
G__16018.cljs$lang$maxFixedArity = 0;
G__16018.cljs$lang$applyTo = (function (arglist__16019){
var args = cljs.core.seq(arglist__16019);
return G__16018__delegate(args);
});
G__16018.cljs$core$IFn$_invoke$arity$variadic = G__16018__delegate;
return G__16018;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__16024(s__16025){return (new cljs.core.LazySeq(null,(function (){var s__16025__$1 = s__16025;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16025__$1);if(temp__4092__auto__)
{var s__16025__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16025__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16025__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16027 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16026 = 0;while(true){
if((i__16026 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__16026);cljs.core.chunk_append.call(null,b__16027,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__16028 = (i__16026 + 1);
i__16026 = G__16028;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16027),iter__16024.call(null,cljs.core.chunk_rest.call(null,s__16025__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16027),null);
}
} else
{var args = cljs.core.first.call(null,s__16025__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__16024.call(null,cljs.core.rest.call(null,s__16025__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,arglists);
});
/**
* Include a list of external javascript files.
* @param {...*} var_args
*/
sablono.core.include_js = (function() { 
var include_js__delegate = function (scripts){var iter__4117__auto__ = (function iter__16033(s__16034){return (new cljs.core.LazySeq(null,(function (){var s__16034__$1 = s__16034;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16034__$1);if(temp__4092__auto__)
{var s__16034__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16034__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16034__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16036 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16035 = 0;while(true){
if((i__16035 < size__4116__auto__))
{var script = cljs.core._nth.call(null,c__4115__auto__,i__16035);cljs.core.chunk_append.call(null,b__16036,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null));
{
var G__16037 = (i__16035 + 1);
i__16035 = G__16037;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16036),iter__16033.call(null,cljs.core.chunk_rest.call(null,s__16034__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16036),null);
}
} else
{var script = cljs.core.first.call(null,s__16034__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null),iter__16033.call(null,cljs.core.rest.call(null,s__16034__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,scripts);
};
var include_js = function (var_args){
var scripts = null;if (arguments.length > 0) {
  scripts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_js__delegate.call(this,scripts);};
include_js.cljs$lang$maxFixedArity = 0;
include_js.cljs$lang$applyTo = (function (arglist__16038){
var scripts = cljs.core.seq(arglist__16038);
return include_js__delegate(scripts);
});
include_js.cljs$core$IFn$_invoke$arity$variadic = include_js__delegate;
return include_js;
})()
;
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__16043(s__16044){return (new cljs.core.LazySeq(null,(function (){var s__16044__$1 = s__16044;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16044__$1);if(temp__4092__auto__)
{var s__16044__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16044__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16044__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16046 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16045 = 0;while(true){
if((i__16045 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__16045);cljs.core.chunk_append.call(null,b__16046,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__16047 = (i__16045 + 1);
i__16045 = G__16047;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16046),iter__16043.call(null,cljs.core.chunk_rest.call(null,s__16044__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16046),null);
}
} else
{var style = cljs.core.first.call(null,s__16044__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__16043.call(null,cljs.core.rest.call(null,s__16044__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__16048){
var styles = cljs.core.seq(arglist__16048);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Wrap the supplied javascript up in script tags and a CDATA section.
*/
sablono.core.javascript_tag = (function javascript_tag(script){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript"], null),[cljs.core.str("//<![CDATA[\n"),cljs.core.str(script),cljs.core.str("\n//]]>")].join('')], null);
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to16049 = (function() { 
var link_to16049__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to16049 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to16049__delegate.call(this,url,content);};
link_to16049.cljs$lang$maxFixedArity = 1;
link_to16049.cljs$lang$applyTo = (function (arglist__16050){
var url = cljs.core.first(arglist__16050);
var content = cljs.core.rest(arglist__16050);
return link_to16049__delegate(url,content);
});
link_to16049.cljs$core$IFn$_invoke$arity$variadic = link_to16049__delegate;
return link_to16049;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to16049);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to16051 = (function() { 
var mail_to16051__delegate = function (e_mail,p__16052){var vec__16054 = p__16052;var content = cljs.core.nth.call(null,vec__16054,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to16051 = function (e_mail,var_args){
var p__16052 = null;if (arguments.length > 1) {
  p__16052 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to16051__delegate.call(this,e_mail,p__16052);};
mail_to16051.cljs$lang$maxFixedArity = 1;
mail_to16051.cljs$lang$applyTo = (function (arglist__16055){
var e_mail = cljs.core.first(arglist__16055);
var p__16052 = cljs.core.rest(arglist__16055);
return mail_to16051__delegate(e_mail,p__16052);
});
mail_to16051.cljs$core$IFn$_invoke$arity$variadic = mail_to16051__delegate;
return mail_to16051;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to16051);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list16056 = (function unordered_list16056(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__16061(s__16062){return (new cljs.core.LazySeq(null,(function (){var s__16062__$1 = s__16062;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16062__$1);if(temp__4092__auto__)
{var s__16062__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16062__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16062__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16064 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16063 = 0;while(true){
if((i__16063 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__16063);cljs.core.chunk_append.call(null,b__16064,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16065 = (i__16063 + 1);
i__16063 = G__16065;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16064),iter__16061.call(null,cljs.core.chunk_rest.call(null,s__16062__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16064),null);
}
} else
{var x = cljs.core.first.call(null,s__16062__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16061.call(null,cljs.core.rest.call(null,s__16062__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list16056);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list16066 = (function ordered_list16066(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__16071(s__16072){return (new cljs.core.LazySeq(null,(function (){var s__16072__$1 = s__16072;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16072__$1);if(temp__4092__auto__)
{var s__16072__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16072__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16072__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16074 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16073 = 0;while(true){
if((i__16073 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__16073);cljs.core.chunk_append.call(null,b__16074,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16075 = (i__16073 + 1);
i__16073 = G__16075;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16074),iter__16071.call(null,cljs.core.chunk_rest.call(null,s__16072__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16074),null);
}
} else
{var x = cljs.core.first.call(null,s__16072__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16071.call(null,cljs.core.rest.call(null,s__16072__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list16066);
/**
* Create an image element.
*/
sablono.core.image16076 = (function() {
var image16076 = null;
var image16076__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image16076__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image16076 = function(src,alt){
switch(arguments.length){
case 1:
return image16076__1.call(this,src);
case 2:
return image16076__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image16076.cljs$core$IFn$_invoke$arity$1 = image16076__1;
image16076.cljs$core$IFn$_invoke$arity$2 = image16076__2;
return image16076;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image16076);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__16077_SHARP_,p2__16078_SHARP_){return [cljs.core.str(p1__16077_SHARP_),cljs.core.str("["),cljs.core.str(p2__16078_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__16079_SHARP_,p2__16080_SHARP_){return [cljs.core.str(p1__16079_SHARP_),cljs.core.str("-"),cljs.core.str(p2__16080_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field16081 = (function() {
var hidden_field16081 = null;
var hidden_field16081__1 = (function (name){return hidden_field16081.call(null,name,null);
});
var hidden_field16081__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field16081 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field16081__1.call(this,name);
case 2:
return hidden_field16081__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field16081.cljs$core$IFn$_invoke$arity$1 = hidden_field16081__1;
hidden_field16081.cljs$core$IFn$_invoke$arity$2 = hidden_field16081__2;
return hidden_field16081;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field16081);
/**
* Creates a new text input field.
*/
sablono.core.text_field16082 = (function() {
var text_field16082 = null;
var text_field16082__1 = (function (name){return text_field16082.call(null,name,null);
});
var text_field16082__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field16082 = function(name,value){
switch(arguments.length){
case 1:
return text_field16082__1.call(this,name);
case 2:
return text_field16082__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field16082.cljs$core$IFn$_invoke$arity$1 = text_field16082__1;
text_field16082.cljs$core$IFn$_invoke$arity$2 = text_field16082__2;
return text_field16082;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field16082);
/**
* Creates a new password field.
*/
sablono.core.password_field16083 = (function() {
var password_field16083 = null;
var password_field16083__1 = (function (name){return password_field16083.call(null,name,null);
});
var password_field16083__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field16083 = function(name,value){
switch(arguments.length){
case 1:
return password_field16083__1.call(this,name);
case 2:
return password_field16083__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field16083.cljs$core$IFn$_invoke$arity$1 = password_field16083__1;
password_field16083.cljs$core$IFn$_invoke$arity$2 = password_field16083__2;
return password_field16083;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field16083);
/**
* Creates a new email input field.
*/
sablono.core.email_field16084 = (function() {
var email_field16084 = null;
var email_field16084__1 = (function (name){return email_field16084.call(null,name,null);
});
var email_field16084__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field16084 = function(name,value){
switch(arguments.length){
case 1:
return email_field16084__1.call(this,name);
case 2:
return email_field16084__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field16084.cljs$core$IFn$_invoke$arity$1 = email_field16084__1;
email_field16084.cljs$core$IFn$_invoke$arity$2 = email_field16084__2;
return email_field16084;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field16084);
/**
* Creates a check box.
*/
sablono.core.check_box16085 = (function() {
var check_box16085 = null;
var check_box16085__1 = (function (name){return check_box16085.call(null,name,null);
});
var check_box16085__2 = (function (name,checked_QMARK_){return check_box16085.call(null,name,checked_QMARK_,"true");
});
var check_box16085__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box16085 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box16085__1.call(this,name);
case 2:
return check_box16085__2.call(this,name,checked_QMARK_);
case 3:
return check_box16085__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box16085.cljs$core$IFn$_invoke$arity$1 = check_box16085__1;
check_box16085.cljs$core$IFn$_invoke$arity$2 = check_box16085__2;
check_box16085.cljs$core$IFn$_invoke$arity$3 = check_box16085__3;
return check_box16085;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box16085);
/**
* Creates a radio button.
*/
sablono.core.radio_button16086 = (function() {
var radio_button16086 = null;
var radio_button16086__1 = (function (group){return radio_button16086.call(null,group,null);
});
var radio_button16086__2 = (function (group,checked_QMARK_){return radio_button16086.call(null,group,checked_QMARK_,"true");
});
var radio_button16086__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button16086 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button16086__1.call(this,group);
case 2:
return radio_button16086__2.call(this,group,checked_QMARK_);
case 3:
return radio_button16086__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button16086.cljs$core$IFn$_invoke$arity$1 = radio_button16086__1;
radio_button16086.cljs$core$IFn$_invoke$arity$2 = radio_button16086__2;
radio_button16086.cljs$core$IFn$_invoke$arity$3 = radio_button16086__3;
return radio_button16086;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button16086);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options16087 = (function() {
var select_options16087 = null;
var select_options16087__1 = (function (coll){return select_options16087.call(null,coll,null);
});
var select_options16087__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__16096(s__16097){return (new cljs.core.LazySeq(null,(function (){var s__16097__$1 = s__16097;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16097__$1);if(temp__4092__auto__)
{var s__16097__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16097__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16097__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16099 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16098 = 0;while(true){
if((i__16098 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__16098);cljs.core.chunk_append.call(null,b__16099,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16102 = x;var text = cljs.core.nth.call(null,vec__16102,0,null);var val = cljs.core.nth.call(null,vec__16102,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options16087.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__16104 = (i__16098 + 1);
i__16098 = G__16104;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16099),iter__16096.call(null,cljs.core.chunk_rest.call(null,s__16097__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16099),null);
}
} else
{var x = cljs.core.first.call(null,s__16097__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16103 = x;var text = cljs.core.nth.call(null,vec__16103,0,null);var val = cljs.core.nth.call(null,vec__16103,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options16087.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__16096.call(null,cljs.core.rest.call(null,s__16097__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options16087 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options16087__1.call(this,coll);
case 2:
return select_options16087__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options16087.cljs$core$IFn$_invoke$arity$1 = select_options16087__1;
select_options16087.cljs$core$IFn$_invoke$arity$2 = select_options16087__2;
return select_options16087;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options16087);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down16105 = (function() {
var drop_down16105 = null;
var drop_down16105__2 = (function (name,options){return drop_down16105.call(null,name,options,null);
});
var drop_down16105__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down16105 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down16105__2.call(this,name,options);
case 3:
return drop_down16105__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down16105.cljs$core$IFn$_invoke$arity$2 = drop_down16105__2;
drop_down16105.cljs$core$IFn$_invoke$arity$3 = drop_down16105__3;
return drop_down16105;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down16105);
/**
* Creates a text area element.
*/
sablono.core.text_area16106 = (function() {
var text_area16106 = null;
var text_area16106__1 = (function (name){return text_area16106.call(null,name,null);
});
var text_area16106__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area16106 = function(name,value){
switch(arguments.length){
case 1:
return text_area16106__1.call(this,name);
case 2:
return text_area16106__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area16106.cljs$core$IFn$_invoke$arity$1 = text_area16106__1;
text_area16106.cljs$core$IFn$_invoke$arity$2 = text_area16106__2;
return text_area16106;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area16106);
/**
* Creates a file upload input.
*/
sablono.core.file_upload16107 = (function file_upload16107(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload16107);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label16108 = (function label16108(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label16108);
/**
* Creates a submit button.
*/
sablono.core.submit_button16109 = (function submit_button16109(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button16109);
/**
* Creates a form reset button.
*/
sablono.core.reset_button16110 = (function reset_button16110(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button16110);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to16111 = (function() { 
var form_to16111__delegate = function (p__16112,body){var vec__16114 = p__16112;var method = cljs.core.nth.call(null,vec__16114,0,null);var action = cljs.core.nth.call(null,vec__16114,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to16111 = function (p__16112,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to16111__delegate.call(this,p__16112,body);};
form_to16111.cljs$lang$maxFixedArity = 1;
form_to16111.cljs$lang$applyTo = (function (arglist__16115){
var p__16112 = cljs.core.first(arglist__16115);
var body = cljs.core.rest(arglist__16115);
return form_to16111__delegate(p__16112,body);
});
form_to16111.cljs$core$IFn$_invoke$arity$variadic = form_to16111__delegate;
return form_to16111;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to16111);

//# sourceMappingURL=core.js.map