// Compiled by ClojureScript 0.0-2322
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__31987__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__31986 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__31986,(0),null);var body = cljs.core.nthnext.call(null,vec__31986,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__31987 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__31987__delegate.call(this,args);};
G__31987.cljs$lang$maxFixedArity = 0;
G__31987.cljs$lang$applyTo = (function (arglist__31988){
var args = cljs.core.seq(arglist__31988);
return G__31987__delegate(args);
});
G__31987.cljs$core$IFn$_invoke$arity$variadic = G__31987__delegate;
return G__31987;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__31993(s__31994){return (new cljs.core.LazySeq(null,(function (){var s__31994__$1 = s__31994;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31994__$1);if(temp__4126__auto__)
{var s__31994__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31994__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__31994__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__31996 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__31995 = (0);while(true){
if((i__31995 < size__4282__auto__))
{var args = cljs.core._nth.call(null,c__4281__auto__,i__31995);cljs.core.chunk_append.call(null,b__31996,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__31997 = (i__31995 + (1));
i__31995 = G__31997;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31996),iter__31993.call(null,cljs.core.chunk_rest.call(null,s__31994__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31996),null);
}
} else
{var args = cljs.core.first.call(null,s__31994__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__31993.call(null,cljs.core.rest.call(null,s__31994__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__32002(s__32003){return (new cljs.core.LazySeq(null,(function (){var s__32003__$1 = s__32003;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32003__$1);if(temp__4126__auto__)
{var s__32003__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32003__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32003__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32005 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32004 = (0);while(true){
if((i__32004 < size__4282__auto__))
{var style = cljs.core._nth.call(null,c__4281__auto__,i__32004);cljs.core.chunk_append.call(null,b__32005,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__32006 = (i__32004 + (1));
i__32004 = G__32006;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32005),iter__32002.call(null,cljs.core.chunk_rest.call(null,s__32003__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32005),null);
}
} else
{var style = cljs.core.first.call(null,s__32003__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__32002.call(null,cljs.core.rest.call(null,s__32003__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__32007){
var styles = cljs.core.seq(arglist__32007);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to32008 = (function() { 
var link_to32008__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to32008 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to32008__delegate.call(this,url,content);};
link_to32008.cljs$lang$maxFixedArity = 1;
link_to32008.cljs$lang$applyTo = (function (arglist__32009){
var url = cljs.core.first(arglist__32009);
var content = cljs.core.rest(arglist__32009);
return link_to32008__delegate(url,content);
});
link_to32008.cljs$core$IFn$_invoke$arity$variadic = link_to32008__delegate;
return link_to32008;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to32008);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to32010 = (function() { 
var mail_to32010__delegate = function (e_mail,p__32011){var vec__32013 = p__32011;var content = cljs.core.nth.call(null,vec__32013,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to32010 = function (e_mail,var_args){
var p__32011 = null;if (arguments.length > 1) {
  p__32011 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to32010__delegate.call(this,e_mail,p__32011);};
mail_to32010.cljs$lang$maxFixedArity = 1;
mail_to32010.cljs$lang$applyTo = (function (arglist__32014){
var e_mail = cljs.core.first(arglist__32014);
var p__32011 = cljs.core.rest(arglist__32014);
return mail_to32010__delegate(e_mail,p__32011);
});
mail_to32010.cljs$core$IFn$_invoke$arity$variadic = mail_to32010__delegate;
return mail_to32010;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to32010);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list32015 = (function unordered_list32015(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4283__auto__ = (function iter__32020(s__32021){return (new cljs.core.LazySeq(null,(function (){var s__32021__$1 = s__32021;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32021__$1);if(temp__4126__auto__)
{var s__32021__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32021__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32021__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32023 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32022 = (0);while(true){
if((i__32022 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__32022);cljs.core.chunk_append.call(null,b__32023,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__32024 = (i__32022 + (1));
i__32022 = G__32024;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32023),iter__32020.call(null,cljs.core.chunk_rest.call(null,s__32021__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32023),null);
}
} else
{var x = cljs.core.first.call(null,s__32021__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__32020.call(null,cljs.core.rest.call(null,s__32021__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list32015);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list32025 = (function ordered_list32025(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4283__auto__ = (function iter__32030(s__32031){return (new cljs.core.LazySeq(null,(function (){var s__32031__$1 = s__32031;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32031__$1);if(temp__4126__auto__)
{var s__32031__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32031__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32031__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32033 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32032 = (0);while(true){
if((i__32032 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__32032);cljs.core.chunk_append.call(null,b__32033,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__32034 = (i__32032 + (1));
i__32032 = G__32034;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32033),iter__32030.call(null,cljs.core.chunk_rest.call(null,s__32031__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32033),null);
}
} else
{var x = cljs.core.first.call(null,s__32031__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__32030.call(null,cljs.core.rest.call(null,s__32031__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list32025);
/**
* Create an image element.
*/
sablono.core.image32035 = (function() {
var image32035 = null;
var image32035__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image32035__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image32035 = function(src,alt){
switch(arguments.length){
case 1:
return image32035__1.call(this,src);
case 2:
return image32035__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image32035.cljs$core$IFn$_invoke$arity$1 = image32035__1;
image32035.cljs$core$IFn$_invoke$arity$2 = image32035__2;
return image32035;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image32035);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__32036_SHARP_,p2__32037_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32036_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__32037_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__32038_SHARP_,p2__32039_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32038_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__32039_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field32040 = (function() {
var color_field32040 = null;
var color_field32040__1 = (function (name__10239__auto__){return color_field32040.call(null,name__10239__auto__,null);
});
var color_field32040__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10239__auto__,value__10240__auto__);
});
color_field32040 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return color_field32040__1.call(this,name__10239__auto__);
case 2:
return color_field32040__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field32040.cljs$core$IFn$_invoke$arity$1 = color_field32040__1;
color_field32040.cljs$core$IFn$_invoke$arity$2 = color_field32040__2;
return color_field32040;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field32040);
/**
* Creates a date input field.
*/
sablono.core.date_field32041 = (function() {
var date_field32041 = null;
var date_field32041__1 = (function (name__10239__auto__){return date_field32041.call(null,name__10239__auto__,null);
});
var date_field32041__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10239__auto__,value__10240__auto__);
});
date_field32041 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return date_field32041__1.call(this,name__10239__auto__);
case 2:
return date_field32041__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field32041.cljs$core$IFn$_invoke$arity$1 = date_field32041__1;
date_field32041.cljs$core$IFn$_invoke$arity$2 = date_field32041__2;
return date_field32041;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field32041);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field32042 = (function() {
var datetime_field32042 = null;
var datetime_field32042__1 = (function (name__10239__auto__){return datetime_field32042.call(null,name__10239__auto__,null);
});
var datetime_field32042__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10239__auto__,value__10240__auto__);
});
datetime_field32042 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return datetime_field32042__1.call(this,name__10239__auto__);
case 2:
return datetime_field32042__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field32042.cljs$core$IFn$_invoke$arity$1 = datetime_field32042__1;
datetime_field32042.cljs$core$IFn$_invoke$arity$2 = datetime_field32042__2;
return datetime_field32042;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field32042);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field32043 = (function() {
var datetime_local_field32043 = null;
var datetime_local_field32043__1 = (function (name__10239__auto__){return datetime_local_field32043.call(null,name__10239__auto__,null);
});
var datetime_local_field32043__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10239__auto__,value__10240__auto__);
});
datetime_local_field32043 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return datetime_local_field32043__1.call(this,name__10239__auto__);
case 2:
return datetime_local_field32043__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field32043.cljs$core$IFn$_invoke$arity$1 = datetime_local_field32043__1;
datetime_local_field32043.cljs$core$IFn$_invoke$arity$2 = datetime_local_field32043__2;
return datetime_local_field32043;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field32043);
/**
* Creates a email input field.
*/
sablono.core.email_field32044 = (function() {
var email_field32044 = null;
var email_field32044__1 = (function (name__10239__auto__){return email_field32044.call(null,name__10239__auto__,null);
});
var email_field32044__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10239__auto__,value__10240__auto__);
});
email_field32044 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return email_field32044__1.call(this,name__10239__auto__);
case 2:
return email_field32044__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field32044.cljs$core$IFn$_invoke$arity$1 = email_field32044__1;
email_field32044.cljs$core$IFn$_invoke$arity$2 = email_field32044__2;
return email_field32044;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field32044);
/**
* Creates a file input field.
*/
sablono.core.file_field32045 = (function() {
var file_field32045 = null;
var file_field32045__1 = (function (name__10239__auto__){return file_field32045.call(null,name__10239__auto__,null);
});
var file_field32045__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10239__auto__,value__10240__auto__);
});
file_field32045 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return file_field32045__1.call(this,name__10239__auto__);
case 2:
return file_field32045__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field32045.cljs$core$IFn$_invoke$arity$1 = file_field32045__1;
file_field32045.cljs$core$IFn$_invoke$arity$2 = file_field32045__2;
return file_field32045;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field32045);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field32046 = (function() {
var hidden_field32046 = null;
var hidden_field32046__1 = (function (name__10239__auto__){return hidden_field32046.call(null,name__10239__auto__,null);
});
var hidden_field32046__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10239__auto__,value__10240__auto__);
});
hidden_field32046 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return hidden_field32046__1.call(this,name__10239__auto__);
case 2:
return hidden_field32046__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field32046.cljs$core$IFn$_invoke$arity$1 = hidden_field32046__1;
hidden_field32046.cljs$core$IFn$_invoke$arity$2 = hidden_field32046__2;
return hidden_field32046;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field32046);
/**
* Creates a month input field.
*/
sablono.core.month_field32047 = (function() {
var month_field32047 = null;
var month_field32047__1 = (function (name__10239__auto__){return month_field32047.call(null,name__10239__auto__,null);
});
var month_field32047__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10239__auto__,value__10240__auto__);
});
month_field32047 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return month_field32047__1.call(this,name__10239__auto__);
case 2:
return month_field32047__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field32047.cljs$core$IFn$_invoke$arity$1 = month_field32047__1;
month_field32047.cljs$core$IFn$_invoke$arity$2 = month_field32047__2;
return month_field32047;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field32047);
/**
* Creates a number input field.
*/
sablono.core.number_field32048 = (function() {
var number_field32048 = null;
var number_field32048__1 = (function (name__10239__auto__){return number_field32048.call(null,name__10239__auto__,null);
});
var number_field32048__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10239__auto__,value__10240__auto__);
});
number_field32048 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return number_field32048__1.call(this,name__10239__auto__);
case 2:
return number_field32048__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field32048.cljs$core$IFn$_invoke$arity$1 = number_field32048__1;
number_field32048.cljs$core$IFn$_invoke$arity$2 = number_field32048__2;
return number_field32048;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field32048);
/**
* Creates a password input field.
*/
sablono.core.password_field32049 = (function() {
var password_field32049 = null;
var password_field32049__1 = (function (name__10239__auto__){return password_field32049.call(null,name__10239__auto__,null);
});
var password_field32049__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10239__auto__,value__10240__auto__);
});
password_field32049 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return password_field32049__1.call(this,name__10239__auto__);
case 2:
return password_field32049__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field32049.cljs$core$IFn$_invoke$arity$1 = password_field32049__1;
password_field32049.cljs$core$IFn$_invoke$arity$2 = password_field32049__2;
return password_field32049;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field32049);
/**
* Creates a range input field.
*/
sablono.core.range_field32050 = (function() {
var range_field32050 = null;
var range_field32050__1 = (function (name__10239__auto__){return range_field32050.call(null,name__10239__auto__,null);
});
var range_field32050__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10239__auto__,value__10240__auto__);
});
range_field32050 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return range_field32050__1.call(this,name__10239__auto__);
case 2:
return range_field32050__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field32050.cljs$core$IFn$_invoke$arity$1 = range_field32050__1;
range_field32050.cljs$core$IFn$_invoke$arity$2 = range_field32050__2;
return range_field32050;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field32050);
/**
* Creates a search input field.
*/
sablono.core.search_field32051 = (function() {
var search_field32051 = null;
var search_field32051__1 = (function (name__10239__auto__){return search_field32051.call(null,name__10239__auto__,null);
});
var search_field32051__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10239__auto__,value__10240__auto__);
});
search_field32051 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return search_field32051__1.call(this,name__10239__auto__);
case 2:
return search_field32051__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field32051.cljs$core$IFn$_invoke$arity$1 = search_field32051__1;
search_field32051.cljs$core$IFn$_invoke$arity$2 = search_field32051__2;
return search_field32051;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field32051);
/**
* Creates a tel input field.
*/
sablono.core.tel_field32052 = (function() {
var tel_field32052 = null;
var tel_field32052__1 = (function (name__10239__auto__){return tel_field32052.call(null,name__10239__auto__,null);
});
var tel_field32052__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10239__auto__,value__10240__auto__);
});
tel_field32052 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return tel_field32052__1.call(this,name__10239__auto__);
case 2:
return tel_field32052__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field32052.cljs$core$IFn$_invoke$arity$1 = tel_field32052__1;
tel_field32052.cljs$core$IFn$_invoke$arity$2 = tel_field32052__2;
return tel_field32052;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field32052);
/**
* Creates a text input field.
*/
sablono.core.text_field32053 = (function() {
var text_field32053 = null;
var text_field32053__1 = (function (name__10239__auto__){return text_field32053.call(null,name__10239__auto__,null);
});
var text_field32053__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10239__auto__,value__10240__auto__);
});
text_field32053 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return text_field32053__1.call(this,name__10239__auto__);
case 2:
return text_field32053__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field32053.cljs$core$IFn$_invoke$arity$1 = text_field32053__1;
text_field32053.cljs$core$IFn$_invoke$arity$2 = text_field32053__2;
return text_field32053;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field32053);
/**
* Creates a time input field.
*/
sablono.core.time_field32054 = (function() {
var time_field32054 = null;
var time_field32054__1 = (function (name__10239__auto__){return time_field32054.call(null,name__10239__auto__,null);
});
var time_field32054__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10239__auto__,value__10240__auto__);
});
time_field32054 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return time_field32054__1.call(this,name__10239__auto__);
case 2:
return time_field32054__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field32054.cljs$core$IFn$_invoke$arity$1 = time_field32054__1;
time_field32054.cljs$core$IFn$_invoke$arity$2 = time_field32054__2;
return time_field32054;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field32054);
/**
* Creates a url input field.
*/
sablono.core.url_field32055 = (function() {
var url_field32055 = null;
var url_field32055__1 = (function (name__10239__auto__){return url_field32055.call(null,name__10239__auto__,null);
});
var url_field32055__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10239__auto__,value__10240__auto__);
});
url_field32055 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return url_field32055__1.call(this,name__10239__auto__);
case 2:
return url_field32055__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field32055.cljs$core$IFn$_invoke$arity$1 = url_field32055__1;
url_field32055.cljs$core$IFn$_invoke$arity$2 = url_field32055__2;
return url_field32055;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field32055);
/**
* Creates a week input field.
*/
sablono.core.week_field32056 = (function() {
var week_field32056 = null;
var week_field32056__1 = (function (name__10239__auto__){return week_field32056.call(null,name__10239__auto__,null);
});
var week_field32056__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10239__auto__,value__10240__auto__);
});
week_field32056 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return week_field32056__1.call(this,name__10239__auto__);
case 2:
return week_field32056__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field32056.cljs$core$IFn$_invoke$arity$1 = week_field32056__1;
week_field32056.cljs$core$IFn$_invoke$arity$2 = week_field32056__2;
return week_field32056;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field32056);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box32057 = (function() {
var check_box32057 = null;
var check_box32057__1 = (function (name){return check_box32057.call(null,name,null);
});
var check_box32057__2 = (function (name,checked_QMARK_){return check_box32057.call(null,name,checked_QMARK_,"true");
});
var check_box32057__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box32057 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box32057__1.call(this,name);
case 2:
return check_box32057__2.call(this,name,checked_QMARK_);
case 3:
return check_box32057__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box32057.cljs$core$IFn$_invoke$arity$1 = check_box32057__1;
check_box32057.cljs$core$IFn$_invoke$arity$2 = check_box32057__2;
check_box32057.cljs$core$IFn$_invoke$arity$3 = check_box32057__3;
return check_box32057;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box32057);
/**
* Creates a radio button.
*/
sablono.core.radio_button32058 = (function() {
var radio_button32058 = null;
var radio_button32058__1 = (function (group){return radio_button32058.call(null,group,null);
});
var radio_button32058__2 = (function (group,checked_QMARK_){return radio_button32058.call(null,group,checked_QMARK_,"true");
});
var radio_button32058__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button32058 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button32058__1.call(this,group);
case 2:
return radio_button32058__2.call(this,group,checked_QMARK_);
case 3:
return radio_button32058__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button32058.cljs$core$IFn$_invoke$arity$1 = radio_button32058__1;
radio_button32058.cljs$core$IFn$_invoke$arity$2 = radio_button32058__2;
radio_button32058.cljs$core$IFn$_invoke$arity$3 = radio_button32058__3;
return radio_button32058;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button32058);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options32059 = (function() {
var select_options32059 = null;
var select_options32059__1 = (function (coll){return select_options32059.call(null,coll,null);
});
var select_options32059__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__32068(s__32069){return (new cljs.core.LazySeq(null,(function (){var s__32069__$1 = s__32069;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32069__$1);if(temp__4126__auto__)
{var s__32069__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32069__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32069__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32071 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32070 = (0);while(true){
if((i__32070 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__32070);cljs.core.chunk_append.call(null,b__32071,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32074 = x;var text = cljs.core.nth.call(null,vec__32074,(0),null);var val = cljs.core.nth.call(null,vec__32074,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__32074,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options32059.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__32076 = (i__32070 + (1));
i__32070 = G__32076;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32071),iter__32068.call(null,cljs.core.chunk_rest.call(null,s__32069__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32071),null);
}
} else
{var x = cljs.core.first.call(null,s__32069__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32075 = x;var text = cljs.core.nth.call(null,vec__32075,(0),null);var val = cljs.core.nth.call(null,vec__32075,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__32075,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options32059.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__32068.call(null,cljs.core.rest.call(null,s__32069__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
});
select_options32059 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options32059__1.call(this,coll);
case 2:
return select_options32059__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options32059.cljs$core$IFn$_invoke$arity$1 = select_options32059__1;
select_options32059.cljs$core$IFn$_invoke$arity$2 = select_options32059__2;
return select_options32059;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options32059);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down32077 = (function() {
var drop_down32077 = null;
var drop_down32077__2 = (function (name,options){return drop_down32077.call(null,name,options,null);
});
var drop_down32077__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down32077 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down32077__2.call(this,name,options);
case 3:
return drop_down32077__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down32077.cljs$core$IFn$_invoke$arity$2 = drop_down32077__2;
drop_down32077.cljs$core$IFn$_invoke$arity$3 = drop_down32077__3;
return drop_down32077;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down32077);
/**
* Creates a text area element.
*/
sablono.core.text_area32078 = (function() {
var text_area32078 = null;
var text_area32078__1 = (function (name){return text_area32078.call(null,name,null);
});
var text_area32078__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area32078 = function(name,value){
switch(arguments.length){
case 1:
return text_area32078__1.call(this,name);
case 2:
return text_area32078__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area32078.cljs$core$IFn$_invoke$arity$1 = text_area32078__1;
text_area32078.cljs$core$IFn$_invoke$arity$2 = text_area32078__2;
return text_area32078;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area32078);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label32079 = (function label32079(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label32079);
/**
* Creates a submit button.
*/
sablono.core.submit_button32080 = (function submit_button32080(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button32080);
/**
* Creates a form reset button.
*/
sablono.core.reset_button32081 = (function reset_button32081(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button32081);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to32082 = (function() { 
var form_to32082__delegate = function (p__32083,body){var vec__32085 = p__32083;var method = cljs.core.nth.call(null,vec__32085,(0),null);var action = cljs.core.nth.call(null,vec__32085,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to32082 = function (p__32083,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to32082__delegate.call(this,p__32083,body);};
form_to32082.cljs$lang$maxFixedArity = 1;
form_to32082.cljs$lang$applyTo = (function (arglist__32086){
var p__32083 = cljs.core.first(arglist__32086);
var body = cljs.core.rest(arglist__32086);
return form_to32082__delegate(p__32083,body);
});
form_to32082.cljs$core$IFn$_invoke$arity$variadic = form_to32082__delegate;
return form_to32082;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to32082);
