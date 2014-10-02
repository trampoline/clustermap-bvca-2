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
var G__57983__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__57982 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__57982,(0),null);var body = cljs.core.nthnext.call(null,vec__57982,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__57983 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__57983__delegate.call(this,args);};
G__57983.cljs$lang$maxFixedArity = 0;
G__57983.cljs$lang$applyTo = (function (arglist__57984){
var args = cljs.core.seq(arglist__57984);
return G__57983__delegate(args);
});
G__57983.cljs$core$IFn$_invoke$arity$variadic = G__57983__delegate;
return G__57983;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__57989(s__57990){return (new cljs.core.LazySeq(null,(function (){var s__57990__$1 = s__57990;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__57990__$1);if(temp__4126__auto__)
{var s__57990__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__57990__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__57990__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__57992 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__57991 = (0);while(true){
if((i__57991 < size__4282__auto__))
{var args = cljs.core._nth.call(null,c__4281__auto__,i__57991);cljs.core.chunk_append.call(null,b__57992,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__57993 = (i__57991 + (1));
i__57991 = G__57993;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57992),iter__57989.call(null,cljs.core.chunk_rest.call(null,s__57990__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57992),null);
}
} else
{var args = cljs.core.first.call(null,s__57990__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__57989.call(null,cljs.core.rest.call(null,s__57990__$2)));
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
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__57998(s__57999){return (new cljs.core.LazySeq(null,(function (){var s__57999__$1 = s__57999;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__57999__$1);if(temp__4126__auto__)
{var s__57999__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__57999__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__57999__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__58001 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__58000 = (0);while(true){
if((i__58000 < size__4282__auto__))
{var style = cljs.core._nth.call(null,c__4281__auto__,i__58000);cljs.core.chunk_append.call(null,b__58001,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__58002 = (i__58000 + (1));
i__58000 = G__58002;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58001),iter__57998.call(null,cljs.core.chunk_rest.call(null,s__57999__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58001),null);
}
} else
{var style = cljs.core.first.call(null,s__57999__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__57998.call(null,cljs.core.rest.call(null,s__57999__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__58003){
var styles = cljs.core.seq(arglist__58003);
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
sablono.core.link_to58004 = (function() { 
var link_to58004__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to58004 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to58004__delegate.call(this,url,content);};
link_to58004.cljs$lang$maxFixedArity = 1;
link_to58004.cljs$lang$applyTo = (function (arglist__58005){
var url = cljs.core.first(arglist__58005);
var content = cljs.core.rest(arglist__58005);
return link_to58004__delegate(url,content);
});
link_to58004.cljs$core$IFn$_invoke$arity$variadic = link_to58004__delegate;
return link_to58004;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to58004);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to58006 = (function() { 
var mail_to58006__delegate = function (e_mail,p__58007){var vec__58009 = p__58007;var content = cljs.core.nth.call(null,vec__58009,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to58006 = function (e_mail,var_args){
var p__58007 = null;if (arguments.length > 1) {
  p__58007 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to58006__delegate.call(this,e_mail,p__58007);};
mail_to58006.cljs$lang$maxFixedArity = 1;
mail_to58006.cljs$lang$applyTo = (function (arglist__58010){
var e_mail = cljs.core.first(arglist__58010);
var p__58007 = cljs.core.rest(arglist__58010);
return mail_to58006__delegate(e_mail,p__58007);
});
mail_to58006.cljs$core$IFn$_invoke$arity$variadic = mail_to58006__delegate;
return mail_to58006;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to58006);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list58011 = (function unordered_list58011(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4283__auto__ = (function iter__58016(s__58017){return (new cljs.core.LazySeq(null,(function (){var s__58017__$1 = s__58017;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__58017__$1);if(temp__4126__auto__)
{var s__58017__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__58017__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__58017__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__58019 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__58018 = (0);while(true){
if((i__58018 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__58018);cljs.core.chunk_append.call(null,b__58019,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__58020 = (i__58018 + (1));
i__58018 = G__58020;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58019),iter__58016.call(null,cljs.core.chunk_rest.call(null,s__58017__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58019),null);
}
} else
{var x = cljs.core.first.call(null,s__58017__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__58016.call(null,cljs.core.rest.call(null,s__58017__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list58011);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list58021 = (function ordered_list58021(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4283__auto__ = (function iter__58026(s__58027){return (new cljs.core.LazySeq(null,(function (){var s__58027__$1 = s__58027;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__58027__$1);if(temp__4126__auto__)
{var s__58027__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__58027__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__58027__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__58029 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__58028 = (0);while(true){
if((i__58028 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__58028);cljs.core.chunk_append.call(null,b__58029,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__58030 = (i__58028 + (1));
i__58028 = G__58030;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58029),iter__58026.call(null,cljs.core.chunk_rest.call(null,s__58027__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58029),null);
}
} else
{var x = cljs.core.first.call(null,s__58027__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__58026.call(null,cljs.core.rest.call(null,s__58027__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list58021);
/**
* Create an image element.
*/
sablono.core.image58031 = (function() {
var image58031 = null;
var image58031__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image58031__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image58031 = function(src,alt){
switch(arguments.length){
case 1:
return image58031__1.call(this,src);
case 2:
return image58031__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image58031.cljs$core$IFn$_invoke$arity$1 = image58031__1;
image58031.cljs$core$IFn$_invoke$arity$2 = image58031__2;
return image58031;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image58031);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__58032_SHARP_,p2__58033_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__58032_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__58033_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__58034_SHARP_,p2__58035_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__58034_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__58035_SHARP_));
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
sablono.core.color_field58036 = (function() {
var color_field58036 = null;
var color_field58036__1 = (function (name__10239__auto__){return color_field58036.call(null,name__10239__auto__,null);
});
var color_field58036__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10239__auto__,value__10240__auto__);
});
color_field58036 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return color_field58036__1.call(this,name__10239__auto__);
case 2:
return color_field58036__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field58036.cljs$core$IFn$_invoke$arity$1 = color_field58036__1;
color_field58036.cljs$core$IFn$_invoke$arity$2 = color_field58036__2;
return color_field58036;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field58036);
/**
* Creates a date input field.
*/
sablono.core.date_field58037 = (function() {
var date_field58037 = null;
var date_field58037__1 = (function (name__10239__auto__){return date_field58037.call(null,name__10239__auto__,null);
});
var date_field58037__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10239__auto__,value__10240__auto__);
});
date_field58037 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return date_field58037__1.call(this,name__10239__auto__);
case 2:
return date_field58037__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field58037.cljs$core$IFn$_invoke$arity$1 = date_field58037__1;
date_field58037.cljs$core$IFn$_invoke$arity$2 = date_field58037__2;
return date_field58037;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field58037);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field58038 = (function() {
var datetime_field58038 = null;
var datetime_field58038__1 = (function (name__10239__auto__){return datetime_field58038.call(null,name__10239__auto__,null);
});
var datetime_field58038__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10239__auto__,value__10240__auto__);
});
datetime_field58038 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return datetime_field58038__1.call(this,name__10239__auto__);
case 2:
return datetime_field58038__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field58038.cljs$core$IFn$_invoke$arity$1 = datetime_field58038__1;
datetime_field58038.cljs$core$IFn$_invoke$arity$2 = datetime_field58038__2;
return datetime_field58038;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field58038);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field58039 = (function() {
var datetime_local_field58039 = null;
var datetime_local_field58039__1 = (function (name__10239__auto__){return datetime_local_field58039.call(null,name__10239__auto__,null);
});
var datetime_local_field58039__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10239__auto__,value__10240__auto__);
});
datetime_local_field58039 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return datetime_local_field58039__1.call(this,name__10239__auto__);
case 2:
return datetime_local_field58039__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field58039.cljs$core$IFn$_invoke$arity$1 = datetime_local_field58039__1;
datetime_local_field58039.cljs$core$IFn$_invoke$arity$2 = datetime_local_field58039__2;
return datetime_local_field58039;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field58039);
/**
* Creates a email input field.
*/
sablono.core.email_field58040 = (function() {
var email_field58040 = null;
var email_field58040__1 = (function (name__10239__auto__){return email_field58040.call(null,name__10239__auto__,null);
});
var email_field58040__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10239__auto__,value__10240__auto__);
});
email_field58040 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return email_field58040__1.call(this,name__10239__auto__);
case 2:
return email_field58040__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field58040.cljs$core$IFn$_invoke$arity$1 = email_field58040__1;
email_field58040.cljs$core$IFn$_invoke$arity$2 = email_field58040__2;
return email_field58040;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field58040);
/**
* Creates a file input field.
*/
sablono.core.file_field58041 = (function() {
var file_field58041 = null;
var file_field58041__1 = (function (name__10239__auto__){return file_field58041.call(null,name__10239__auto__,null);
});
var file_field58041__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10239__auto__,value__10240__auto__);
});
file_field58041 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return file_field58041__1.call(this,name__10239__auto__);
case 2:
return file_field58041__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field58041.cljs$core$IFn$_invoke$arity$1 = file_field58041__1;
file_field58041.cljs$core$IFn$_invoke$arity$2 = file_field58041__2;
return file_field58041;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field58041);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field58042 = (function() {
var hidden_field58042 = null;
var hidden_field58042__1 = (function (name__10239__auto__){return hidden_field58042.call(null,name__10239__auto__,null);
});
var hidden_field58042__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10239__auto__,value__10240__auto__);
});
hidden_field58042 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return hidden_field58042__1.call(this,name__10239__auto__);
case 2:
return hidden_field58042__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field58042.cljs$core$IFn$_invoke$arity$1 = hidden_field58042__1;
hidden_field58042.cljs$core$IFn$_invoke$arity$2 = hidden_field58042__2;
return hidden_field58042;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field58042);
/**
* Creates a month input field.
*/
sablono.core.month_field58043 = (function() {
var month_field58043 = null;
var month_field58043__1 = (function (name__10239__auto__){return month_field58043.call(null,name__10239__auto__,null);
});
var month_field58043__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10239__auto__,value__10240__auto__);
});
month_field58043 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return month_field58043__1.call(this,name__10239__auto__);
case 2:
return month_field58043__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field58043.cljs$core$IFn$_invoke$arity$1 = month_field58043__1;
month_field58043.cljs$core$IFn$_invoke$arity$2 = month_field58043__2;
return month_field58043;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field58043);
/**
* Creates a number input field.
*/
sablono.core.number_field58044 = (function() {
var number_field58044 = null;
var number_field58044__1 = (function (name__10239__auto__){return number_field58044.call(null,name__10239__auto__,null);
});
var number_field58044__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10239__auto__,value__10240__auto__);
});
number_field58044 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return number_field58044__1.call(this,name__10239__auto__);
case 2:
return number_field58044__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field58044.cljs$core$IFn$_invoke$arity$1 = number_field58044__1;
number_field58044.cljs$core$IFn$_invoke$arity$2 = number_field58044__2;
return number_field58044;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field58044);
/**
* Creates a password input field.
*/
sablono.core.password_field58045 = (function() {
var password_field58045 = null;
var password_field58045__1 = (function (name__10239__auto__){return password_field58045.call(null,name__10239__auto__,null);
});
var password_field58045__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10239__auto__,value__10240__auto__);
});
password_field58045 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return password_field58045__1.call(this,name__10239__auto__);
case 2:
return password_field58045__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field58045.cljs$core$IFn$_invoke$arity$1 = password_field58045__1;
password_field58045.cljs$core$IFn$_invoke$arity$2 = password_field58045__2;
return password_field58045;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field58045);
/**
* Creates a range input field.
*/
sablono.core.range_field58046 = (function() {
var range_field58046 = null;
var range_field58046__1 = (function (name__10239__auto__){return range_field58046.call(null,name__10239__auto__,null);
});
var range_field58046__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10239__auto__,value__10240__auto__);
});
range_field58046 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return range_field58046__1.call(this,name__10239__auto__);
case 2:
return range_field58046__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field58046.cljs$core$IFn$_invoke$arity$1 = range_field58046__1;
range_field58046.cljs$core$IFn$_invoke$arity$2 = range_field58046__2;
return range_field58046;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field58046);
/**
* Creates a search input field.
*/
sablono.core.search_field58047 = (function() {
var search_field58047 = null;
var search_field58047__1 = (function (name__10239__auto__){return search_field58047.call(null,name__10239__auto__,null);
});
var search_field58047__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10239__auto__,value__10240__auto__);
});
search_field58047 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return search_field58047__1.call(this,name__10239__auto__);
case 2:
return search_field58047__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field58047.cljs$core$IFn$_invoke$arity$1 = search_field58047__1;
search_field58047.cljs$core$IFn$_invoke$arity$2 = search_field58047__2;
return search_field58047;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field58047);
/**
* Creates a tel input field.
*/
sablono.core.tel_field58048 = (function() {
var tel_field58048 = null;
var tel_field58048__1 = (function (name__10239__auto__){return tel_field58048.call(null,name__10239__auto__,null);
});
var tel_field58048__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10239__auto__,value__10240__auto__);
});
tel_field58048 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return tel_field58048__1.call(this,name__10239__auto__);
case 2:
return tel_field58048__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field58048.cljs$core$IFn$_invoke$arity$1 = tel_field58048__1;
tel_field58048.cljs$core$IFn$_invoke$arity$2 = tel_field58048__2;
return tel_field58048;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field58048);
/**
* Creates a text input field.
*/
sablono.core.text_field58049 = (function() {
var text_field58049 = null;
var text_field58049__1 = (function (name__10239__auto__){return text_field58049.call(null,name__10239__auto__,null);
});
var text_field58049__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10239__auto__,value__10240__auto__);
});
text_field58049 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return text_field58049__1.call(this,name__10239__auto__);
case 2:
return text_field58049__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field58049.cljs$core$IFn$_invoke$arity$1 = text_field58049__1;
text_field58049.cljs$core$IFn$_invoke$arity$2 = text_field58049__2;
return text_field58049;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field58049);
/**
* Creates a time input field.
*/
sablono.core.time_field58050 = (function() {
var time_field58050 = null;
var time_field58050__1 = (function (name__10239__auto__){return time_field58050.call(null,name__10239__auto__,null);
});
var time_field58050__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10239__auto__,value__10240__auto__);
});
time_field58050 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return time_field58050__1.call(this,name__10239__auto__);
case 2:
return time_field58050__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field58050.cljs$core$IFn$_invoke$arity$1 = time_field58050__1;
time_field58050.cljs$core$IFn$_invoke$arity$2 = time_field58050__2;
return time_field58050;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field58050);
/**
* Creates a url input field.
*/
sablono.core.url_field58051 = (function() {
var url_field58051 = null;
var url_field58051__1 = (function (name__10239__auto__){return url_field58051.call(null,name__10239__auto__,null);
});
var url_field58051__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10239__auto__,value__10240__auto__);
});
url_field58051 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return url_field58051__1.call(this,name__10239__auto__);
case 2:
return url_field58051__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field58051.cljs$core$IFn$_invoke$arity$1 = url_field58051__1;
url_field58051.cljs$core$IFn$_invoke$arity$2 = url_field58051__2;
return url_field58051;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field58051);
/**
* Creates a week input field.
*/
sablono.core.week_field58052 = (function() {
var week_field58052 = null;
var week_field58052__1 = (function (name__10239__auto__){return week_field58052.call(null,name__10239__auto__,null);
});
var week_field58052__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10239__auto__,value__10240__auto__);
});
week_field58052 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return week_field58052__1.call(this,name__10239__auto__);
case 2:
return week_field58052__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field58052.cljs$core$IFn$_invoke$arity$1 = week_field58052__1;
week_field58052.cljs$core$IFn$_invoke$arity$2 = week_field58052__2;
return week_field58052;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field58052);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box58053 = (function() {
var check_box58053 = null;
var check_box58053__1 = (function (name){return check_box58053.call(null,name,null);
});
var check_box58053__2 = (function (name,checked_QMARK_){return check_box58053.call(null,name,checked_QMARK_,"true");
});
var check_box58053__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box58053 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box58053__1.call(this,name);
case 2:
return check_box58053__2.call(this,name,checked_QMARK_);
case 3:
return check_box58053__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box58053.cljs$core$IFn$_invoke$arity$1 = check_box58053__1;
check_box58053.cljs$core$IFn$_invoke$arity$2 = check_box58053__2;
check_box58053.cljs$core$IFn$_invoke$arity$3 = check_box58053__3;
return check_box58053;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box58053);
/**
* Creates a radio button.
*/
sablono.core.radio_button58054 = (function() {
var radio_button58054 = null;
var radio_button58054__1 = (function (group){return radio_button58054.call(null,group,null);
});
var radio_button58054__2 = (function (group,checked_QMARK_){return radio_button58054.call(null,group,checked_QMARK_,"true");
});
var radio_button58054__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button58054 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button58054__1.call(this,group);
case 2:
return radio_button58054__2.call(this,group,checked_QMARK_);
case 3:
return radio_button58054__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button58054.cljs$core$IFn$_invoke$arity$1 = radio_button58054__1;
radio_button58054.cljs$core$IFn$_invoke$arity$2 = radio_button58054__2;
radio_button58054.cljs$core$IFn$_invoke$arity$3 = radio_button58054__3;
return radio_button58054;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button58054);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options58055 = (function() {
var select_options58055 = null;
var select_options58055__1 = (function (coll){return select_options58055.call(null,coll,null);
});
var select_options58055__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__58064(s__58065){return (new cljs.core.LazySeq(null,(function (){var s__58065__$1 = s__58065;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__58065__$1);if(temp__4126__auto__)
{var s__58065__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__58065__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__58065__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__58067 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__58066 = (0);while(true){
if((i__58066 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__58066);cljs.core.chunk_append.call(null,b__58067,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__58070 = x;var text = cljs.core.nth.call(null,vec__58070,(0),null);var val = cljs.core.nth.call(null,vec__58070,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__58070,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options58055.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__58072 = (i__58066 + (1));
i__58066 = G__58072;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58067),iter__58064.call(null,cljs.core.chunk_rest.call(null,s__58065__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58067),null);
}
} else
{var x = cljs.core.first.call(null,s__58065__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__58071 = x;var text = cljs.core.nth.call(null,vec__58071,(0),null);var val = cljs.core.nth.call(null,vec__58071,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__58071,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options58055.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__58064.call(null,cljs.core.rest.call(null,s__58065__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
});
select_options58055 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options58055__1.call(this,coll);
case 2:
return select_options58055__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options58055.cljs$core$IFn$_invoke$arity$1 = select_options58055__1;
select_options58055.cljs$core$IFn$_invoke$arity$2 = select_options58055__2;
return select_options58055;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options58055);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down58073 = (function() {
var drop_down58073 = null;
var drop_down58073__2 = (function (name,options){return drop_down58073.call(null,name,options,null);
});
var drop_down58073__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down58073 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down58073__2.call(this,name,options);
case 3:
return drop_down58073__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down58073.cljs$core$IFn$_invoke$arity$2 = drop_down58073__2;
drop_down58073.cljs$core$IFn$_invoke$arity$3 = drop_down58073__3;
return drop_down58073;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down58073);
/**
* Creates a text area element.
*/
sablono.core.text_area58074 = (function() {
var text_area58074 = null;
var text_area58074__1 = (function (name){return text_area58074.call(null,name,null);
});
var text_area58074__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area58074 = function(name,value){
switch(arguments.length){
case 1:
return text_area58074__1.call(this,name);
case 2:
return text_area58074__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area58074.cljs$core$IFn$_invoke$arity$1 = text_area58074__1;
text_area58074.cljs$core$IFn$_invoke$arity$2 = text_area58074__2;
return text_area58074;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area58074);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label58075 = (function label58075(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label58075);
/**
* Creates a submit button.
*/
sablono.core.submit_button58076 = (function submit_button58076(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button58076);
/**
* Creates a form reset button.
*/
sablono.core.reset_button58077 = (function reset_button58077(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button58077);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to58078 = (function() { 
var form_to58078__delegate = function (p__58079,body){var vec__58081 = p__58079;var method = cljs.core.nth.call(null,vec__58081,(0),null);var action = cljs.core.nth.call(null,vec__58081,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to58078 = function (p__58079,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to58078__delegate.call(this,p__58079,body);};
form_to58078.cljs$lang$maxFixedArity = 1;
form_to58078.cljs$lang$applyTo = (function (arglist__58082){
var p__58079 = cljs.core.first(arglist__58082);
var body = cljs.core.rest(arglist__58082);
return form_to58078__delegate(p__58079,body);
});
form_to58078.cljs$core$IFn$_invoke$arity$variadic = form_to58078__delegate;
return form_to58078;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to58078);

//# sourceMappingURL=core.js.map