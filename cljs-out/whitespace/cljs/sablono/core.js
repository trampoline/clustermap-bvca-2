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
var G__18989__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__18988 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__18988,(0),null);var body = cljs.core.nthnext.call(null,vec__18988,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__18989 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__18989__delegate.call(this,args);};
G__18989.cljs$lang$maxFixedArity = 0;
G__18989.cljs$lang$applyTo = (function (arglist__18990){
var args = cljs.core.seq(arglist__18990);
return G__18989__delegate(args);
});
G__18989.cljs$core$IFn$_invoke$arity$variadic = G__18989__delegate;
return G__18989;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__18995(s__18996){return (new cljs.core.LazySeq(null,(function (){var s__18996__$1 = s__18996;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18996__$1);if(temp__4126__auto__)
{var s__18996__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18996__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__18996__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__18998 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__18997 = (0);while(true){
if((i__18997 < size__4282__auto__))
{var args = cljs.core._nth.call(null,c__4281__auto__,i__18997);cljs.core.chunk_append.call(null,b__18998,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__18999 = (i__18997 + (1));
i__18997 = G__18999;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18998),iter__18995.call(null,cljs.core.chunk_rest.call(null,s__18996__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18998),null);
}
} else
{var args = cljs.core.first.call(null,s__18996__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__18995.call(null,cljs.core.rest.call(null,s__18996__$2)));
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
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__19004(s__19005){return (new cljs.core.LazySeq(null,(function (){var s__19005__$1 = s__19005;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19005__$1);if(temp__4126__auto__)
{var s__19005__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19005__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__19005__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__19007 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__19006 = (0);while(true){
if((i__19006 < size__4282__auto__))
{var style = cljs.core._nth.call(null,c__4281__auto__,i__19006);cljs.core.chunk_append.call(null,b__19007,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__19008 = (i__19006 + (1));
i__19006 = G__19008;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19007),iter__19004.call(null,cljs.core.chunk_rest.call(null,s__19005__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19007),null);
}
} else
{var style = cljs.core.first.call(null,s__19005__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__19004.call(null,cljs.core.rest.call(null,s__19005__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__19009){
var styles = cljs.core.seq(arglist__19009);
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
sablono.core.link_to19010 = (function() { 
var link_to19010__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to19010 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to19010__delegate.call(this,url,content);};
link_to19010.cljs$lang$maxFixedArity = 1;
link_to19010.cljs$lang$applyTo = (function (arglist__19011){
var url = cljs.core.first(arglist__19011);
var content = cljs.core.rest(arglist__19011);
return link_to19010__delegate(url,content);
});
link_to19010.cljs$core$IFn$_invoke$arity$variadic = link_to19010__delegate;
return link_to19010;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to19010);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to19012 = (function() { 
var mail_to19012__delegate = function (e_mail,p__19013){var vec__19015 = p__19013;var content = cljs.core.nth.call(null,vec__19015,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to19012 = function (e_mail,var_args){
var p__19013 = null;if (arguments.length > 1) {
  p__19013 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to19012__delegate.call(this,e_mail,p__19013);};
mail_to19012.cljs$lang$maxFixedArity = 1;
mail_to19012.cljs$lang$applyTo = (function (arglist__19016){
var e_mail = cljs.core.first(arglist__19016);
var p__19013 = cljs.core.rest(arglist__19016);
return mail_to19012__delegate(e_mail,p__19013);
});
mail_to19012.cljs$core$IFn$_invoke$arity$variadic = mail_to19012__delegate;
return mail_to19012;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to19012);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list19017 = (function unordered_list19017(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4283__auto__ = (function iter__19022(s__19023){return (new cljs.core.LazySeq(null,(function (){var s__19023__$1 = s__19023;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19023__$1);if(temp__4126__auto__)
{var s__19023__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19023__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__19023__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__19025 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__19024 = (0);while(true){
if((i__19024 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__19024);cljs.core.chunk_append.call(null,b__19025,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__19026 = (i__19024 + (1));
i__19024 = G__19026;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19025),iter__19022.call(null,cljs.core.chunk_rest.call(null,s__19023__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19025),null);
}
} else
{var x = cljs.core.first.call(null,s__19023__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__19022.call(null,cljs.core.rest.call(null,s__19023__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list19017);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list19027 = (function ordered_list19027(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4283__auto__ = (function iter__19032(s__19033){return (new cljs.core.LazySeq(null,(function (){var s__19033__$1 = s__19033;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19033__$1);if(temp__4126__auto__)
{var s__19033__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19033__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__19033__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__19035 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__19034 = (0);while(true){
if((i__19034 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__19034);cljs.core.chunk_append.call(null,b__19035,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__19036 = (i__19034 + (1));
i__19034 = G__19036;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19035),iter__19032.call(null,cljs.core.chunk_rest.call(null,s__19033__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19035),null);
}
} else
{var x = cljs.core.first.call(null,s__19033__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__19032.call(null,cljs.core.rest.call(null,s__19033__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list19027);
/**
* Create an image element.
*/
sablono.core.image19037 = (function() {
var image19037 = null;
var image19037__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image19037__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image19037 = function(src,alt){
switch(arguments.length){
case 1:
return image19037__1.call(this,src);
case 2:
return image19037__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image19037.cljs$core$IFn$_invoke$arity$1 = image19037__1;
image19037.cljs$core$IFn$_invoke$arity$2 = image19037__2;
return image19037;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image19037);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__19038_SHARP_,p2__19039_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19038_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__19039_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__19040_SHARP_,p2__19041_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19040_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__19041_SHARP_));
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
sablono.core.color_field19042 = (function() {
var color_field19042 = null;
var color_field19042__1 = (function (name__10239__auto__){return color_field19042.call(null,name__10239__auto__,null);
});
var color_field19042__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10239__auto__,value__10240__auto__);
});
color_field19042 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return color_field19042__1.call(this,name__10239__auto__);
case 2:
return color_field19042__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field19042.cljs$core$IFn$_invoke$arity$1 = color_field19042__1;
color_field19042.cljs$core$IFn$_invoke$arity$2 = color_field19042__2;
return color_field19042;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field19042);
/**
* Creates a date input field.
*/
sablono.core.date_field19043 = (function() {
var date_field19043 = null;
var date_field19043__1 = (function (name__10239__auto__){return date_field19043.call(null,name__10239__auto__,null);
});
var date_field19043__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10239__auto__,value__10240__auto__);
});
date_field19043 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return date_field19043__1.call(this,name__10239__auto__);
case 2:
return date_field19043__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field19043.cljs$core$IFn$_invoke$arity$1 = date_field19043__1;
date_field19043.cljs$core$IFn$_invoke$arity$2 = date_field19043__2;
return date_field19043;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field19043);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field19044 = (function() {
var datetime_field19044 = null;
var datetime_field19044__1 = (function (name__10239__auto__){return datetime_field19044.call(null,name__10239__auto__,null);
});
var datetime_field19044__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10239__auto__,value__10240__auto__);
});
datetime_field19044 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return datetime_field19044__1.call(this,name__10239__auto__);
case 2:
return datetime_field19044__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field19044.cljs$core$IFn$_invoke$arity$1 = datetime_field19044__1;
datetime_field19044.cljs$core$IFn$_invoke$arity$2 = datetime_field19044__2;
return datetime_field19044;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field19044);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field19045 = (function() {
var datetime_local_field19045 = null;
var datetime_local_field19045__1 = (function (name__10239__auto__){return datetime_local_field19045.call(null,name__10239__auto__,null);
});
var datetime_local_field19045__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10239__auto__,value__10240__auto__);
});
datetime_local_field19045 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return datetime_local_field19045__1.call(this,name__10239__auto__);
case 2:
return datetime_local_field19045__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field19045.cljs$core$IFn$_invoke$arity$1 = datetime_local_field19045__1;
datetime_local_field19045.cljs$core$IFn$_invoke$arity$2 = datetime_local_field19045__2;
return datetime_local_field19045;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field19045);
/**
* Creates a email input field.
*/
sablono.core.email_field19046 = (function() {
var email_field19046 = null;
var email_field19046__1 = (function (name__10239__auto__){return email_field19046.call(null,name__10239__auto__,null);
});
var email_field19046__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10239__auto__,value__10240__auto__);
});
email_field19046 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return email_field19046__1.call(this,name__10239__auto__);
case 2:
return email_field19046__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field19046.cljs$core$IFn$_invoke$arity$1 = email_field19046__1;
email_field19046.cljs$core$IFn$_invoke$arity$2 = email_field19046__2;
return email_field19046;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field19046);
/**
* Creates a file input field.
*/
sablono.core.file_field19047 = (function() {
var file_field19047 = null;
var file_field19047__1 = (function (name__10239__auto__){return file_field19047.call(null,name__10239__auto__,null);
});
var file_field19047__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10239__auto__,value__10240__auto__);
});
file_field19047 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return file_field19047__1.call(this,name__10239__auto__);
case 2:
return file_field19047__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field19047.cljs$core$IFn$_invoke$arity$1 = file_field19047__1;
file_field19047.cljs$core$IFn$_invoke$arity$2 = file_field19047__2;
return file_field19047;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field19047);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field19048 = (function() {
var hidden_field19048 = null;
var hidden_field19048__1 = (function (name__10239__auto__){return hidden_field19048.call(null,name__10239__auto__,null);
});
var hidden_field19048__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10239__auto__,value__10240__auto__);
});
hidden_field19048 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return hidden_field19048__1.call(this,name__10239__auto__);
case 2:
return hidden_field19048__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field19048.cljs$core$IFn$_invoke$arity$1 = hidden_field19048__1;
hidden_field19048.cljs$core$IFn$_invoke$arity$2 = hidden_field19048__2;
return hidden_field19048;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field19048);
/**
* Creates a month input field.
*/
sablono.core.month_field19049 = (function() {
var month_field19049 = null;
var month_field19049__1 = (function (name__10239__auto__){return month_field19049.call(null,name__10239__auto__,null);
});
var month_field19049__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10239__auto__,value__10240__auto__);
});
month_field19049 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return month_field19049__1.call(this,name__10239__auto__);
case 2:
return month_field19049__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field19049.cljs$core$IFn$_invoke$arity$1 = month_field19049__1;
month_field19049.cljs$core$IFn$_invoke$arity$2 = month_field19049__2;
return month_field19049;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field19049);
/**
* Creates a number input field.
*/
sablono.core.number_field19050 = (function() {
var number_field19050 = null;
var number_field19050__1 = (function (name__10239__auto__){return number_field19050.call(null,name__10239__auto__,null);
});
var number_field19050__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10239__auto__,value__10240__auto__);
});
number_field19050 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return number_field19050__1.call(this,name__10239__auto__);
case 2:
return number_field19050__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field19050.cljs$core$IFn$_invoke$arity$1 = number_field19050__1;
number_field19050.cljs$core$IFn$_invoke$arity$2 = number_field19050__2;
return number_field19050;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field19050);
/**
* Creates a password input field.
*/
sablono.core.password_field19051 = (function() {
var password_field19051 = null;
var password_field19051__1 = (function (name__10239__auto__){return password_field19051.call(null,name__10239__auto__,null);
});
var password_field19051__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10239__auto__,value__10240__auto__);
});
password_field19051 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return password_field19051__1.call(this,name__10239__auto__);
case 2:
return password_field19051__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field19051.cljs$core$IFn$_invoke$arity$1 = password_field19051__1;
password_field19051.cljs$core$IFn$_invoke$arity$2 = password_field19051__2;
return password_field19051;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field19051);
/**
* Creates a range input field.
*/
sablono.core.range_field19052 = (function() {
var range_field19052 = null;
var range_field19052__1 = (function (name__10239__auto__){return range_field19052.call(null,name__10239__auto__,null);
});
var range_field19052__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10239__auto__,value__10240__auto__);
});
range_field19052 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return range_field19052__1.call(this,name__10239__auto__);
case 2:
return range_field19052__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field19052.cljs$core$IFn$_invoke$arity$1 = range_field19052__1;
range_field19052.cljs$core$IFn$_invoke$arity$2 = range_field19052__2;
return range_field19052;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field19052);
/**
* Creates a search input field.
*/
sablono.core.search_field19053 = (function() {
var search_field19053 = null;
var search_field19053__1 = (function (name__10239__auto__){return search_field19053.call(null,name__10239__auto__,null);
});
var search_field19053__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10239__auto__,value__10240__auto__);
});
search_field19053 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return search_field19053__1.call(this,name__10239__auto__);
case 2:
return search_field19053__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field19053.cljs$core$IFn$_invoke$arity$1 = search_field19053__1;
search_field19053.cljs$core$IFn$_invoke$arity$2 = search_field19053__2;
return search_field19053;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field19053);
/**
* Creates a tel input field.
*/
sablono.core.tel_field19054 = (function() {
var tel_field19054 = null;
var tel_field19054__1 = (function (name__10239__auto__){return tel_field19054.call(null,name__10239__auto__,null);
});
var tel_field19054__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10239__auto__,value__10240__auto__);
});
tel_field19054 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return tel_field19054__1.call(this,name__10239__auto__);
case 2:
return tel_field19054__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field19054.cljs$core$IFn$_invoke$arity$1 = tel_field19054__1;
tel_field19054.cljs$core$IFn$_invoke$arity$2 = tel_field19054__2;
return tel_field19054;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field19054);
/**
* Creates a text input field.
*/
sablono.core.text_field19055 = (function() {
var text_field19055 = null;
var text_field19055__1 = (function (name__10239__auto__){return text_field19055.call(null,name__10239__auto__,null);
});
var text_field19055__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10239__auto__,value__10240__auto__);
});
text_field19055 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return text_field19055__1.call(this,name__10239__auto__);
case 2:
return text_field19055__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field19055.cljs$core$IFn$_invoke$arity$1 = text_field19055__1;
text_field19055.cljs$core$IFn$_invoke$arity$2 = text_field19055__2;
return text_field19055;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field19055);
/**
* Creates a time input field.
*/
sablono.core.time_field19056 = (function() {
var time_field19056 = null;
var time_field19056__1 = (function (name__10239__auto__){return time_field19056.call(null,name__10239__auto__,null);
});
var time_field19056__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10239__auto__,value__10240__auto__);
});
time_field19056 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return time_field19056__1.call(this,name__10239__auto__);
case 2:
return time_field19056__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field19056.cljs$core$IFn$_invoke$arity$1 = time_field19056__1;
time_field19056.cljs$core$IFn$_invoke$arity$2 = time_field19056__2;
return time_field19056;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field19056);
/**
* Creates a url input field.
*/
sablono.core.url_field19057 = (function() {
var url_field19057 = null;
var url_field19057__1 = (function (name__10239__auto__){return url_field19057.call(null,name__10239__auto__,null);
});
var url_field19057__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10239__auto__,value__10240__auto__);
});
url_field19057 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return url_field19057__1.call(this,name__10239__auto__);
case 2:
return url_field19057__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field19057.cljs$core$IFn$_invoke$arity$1 = url_field19057__1;
url_field19057.cljs$core$IFn$_invoke$arity$2 = url_field19057__2;
return url_field19057;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field19057);
/**
* Creates a week input field.
*/
sablono.core.week_field19058 = (function() {
var week_field19058 = null;
var week_field19058__1 = (function (name__10239__auto__){return week_field19058.call(null,name__10239__auto__,null);
});
var week_field19058__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10239__auto__,value__10240__auto__);
});
week_field19058 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return week_field19058__1.call(this,name__10239__auto__);
case 2:
return week_field19058__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field19058.cljs$core$IFn$_invoke$arity$1 = week_field19058__1;
week_field19058.cljs$core$IFn$_invoke$arity$2 = week_field19058__2;
return week_field19058;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field19058);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box19059 = (function() {
var check_box19059 = null;
var check_box19059__1 = (function (name){return check_box19059.call(null,name,null);
});
var check_box19059__2 = (function (name,checked_QMARK_){return check_box19059.call(null,name,checked_QMARK_,"true");
});
var check_box19059__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box19059 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box19059__1.call(this,name);
case 2:
return check_box19059__2.call(this,name,checked_QMARK_);
case 3:
return check_box19059__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box19059.cljs$core$IFn$_invoke$arity$1 = check_box19059__1;
check_box19059.cljs$core$IFn$_invoke$arity$2 = check_box19059__2;
check_box19059.cljs$core$IFn$_invoke$arity$3 = check_box19059__3;
return check_box19059;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box19059);
/**
* Creates a radio button.
*/
sablono.core.radio_button19060 = (function() {
var radio_button19060 = null;
var radio_button19060__1 = (function (group){return radio_button19060.call(null,group,null);
});
var radio_button19060__2 = (function (group,checked_QMARK_){return radio_button19060.call(null,group,checked_QMARK_,"true");
});
var radio_button19060__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button19060 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button19060__1.call(this,group);
case 2:
return radio_button19060__2.call(this,group,checked_QMARK_);
case 3:
return radio_button19060__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button19060.cljs$core$IFn$_invoke$arity$1 = radio_button19060__1;
radio_button19060.cljs$core$IFn$_invoke$arity$2 = radio_button19060__2;
radio_button19060.cljs$core$IFn$_invoke$arity$3 = radio_button19060__3;
return radio_button19060;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button19060);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options19061 = (function() {
var select_options19061 = null;
var select_options19061__1 = (function (coll){return select_options19061.call(null,coll,null);
});
var select_options19061__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__19070(s__19071){return (new cljs.core.LazySeq(null,(function (){var s__19071__$1 = s__19071;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19071__$1);if(temp__4126__auto__)
{var s__19071__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19071__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__19071__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__19073 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__19072 = (0);while(true){
if((i__19072 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__19072);cljs.core.chunk_append.call(null,b__19073,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__19076 = x;var text = cljs.core.nth.call(null,vec__19076,(0),null);var val = cljs.core.nth.call(null,vec__19076,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__19076,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options19061.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__19078 = (i__19072 + (1));
i__19072 = G__19078;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19073),iter__19070.call(null,cljs.core.chunk_rest.call(null,s__19071__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19073),null);
}
} else
{var x = cljs.core.first.call(null,s__19071__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__19077 = x;var text = cljs.core.nth.call(null,vec__19077,(0),null);var val = cljs.core.nth.call(null,vec__19077,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__19077,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options19061.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__19070.call(null,cljs.core.rest.call(null,s__19071__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
});
select_options19061 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options19061__1.call(this,coll);
case 2:
return select_options19061__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options19061.cljs$core$IFn$_invoke$arity$1 = select_options19061__1;
select_options19061.cljs$core$IFn$_invoke$arity$2 = select_options19061__2;
return select_options19061;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options19061);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down19079 = (function() {
var drop_down19079 = null;
var drop_down19079__2 = (function (name,options){return drop_down19079.call(null,name,options,null);
});
var drop_down19079__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down19079 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down19079__2.call(this,name,options);
case 3:
return drop_down19079__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down19079.cljs$core$IFn$_invoke$arity$2 = drop_down19079__2;
drop_down19079.cljs$core$IFn$_invoke$arity$3 = drop_down19079__3;
return drop_down19079;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down19079);
/**
* Creates a text area element.
*/
sablono.core.text_area19080 = (function() {
var text_area19080 = null;
var text_area19080__1 = (function (name){return text_area19080.call(null,name,null);
});
var text_area19080__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area19080 = function(name,value){
switch(arguments.length){
case 1:
return text_area19080__1.call(this,name);
case 2:
return text_area19080__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area19080.cljs$core$IFn$_invoke$arity$1 = text_area19080__1;
text_area19080.cljs$core$IFn$_invoke$arity$2 = text_area19080__2;
return text_area19080;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area19080);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label19081 = (function label19081(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label19081);
/**
* Creates a submit button.
*/
sablono.core.submit_button19082 = (function submit_button19082(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button19082);
/**
* Creates a form reset button.
*/
sablono.core.reset_button19083 = (function reset_button19083(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button19083);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to19084 = (function() { 
var form_to19084__delegate = function (p__19085,body){var vec__19087 = p__19085;var method = cljs.core.nth.call(null,vec__19087,(0),null);var action = cljs.core.nth.call(null,vec__19087,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to19084 = function (p__19085,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to19084__delegate.call(this,p__19085,body);};
form_to19084.cljs$lang$maxFixedArity = 1;
form_to19084.cljs$lang$applyTo = (function (arglist__19088){
var p__19085 = cljs.core.first(arglist__19088);
var body = cljs.core.rest(arglist__19088);
return form_to19084__delegate(p__19085,body);
});
form_to19084.cljs$core$IFn$_invoke$arity$variadic = form_to19084__delegate;
return form_to19084;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to19084);
