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
var G__37373__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__37372 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__37372,(0),null);var body = cljs.core.nthnext.call(null,vec__37372,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__37373 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__37373__delegate.call(this,args);};
G__37373.cljs$lang$maxFixedArity = 0;
G__37373.cljs$lang$applyTo = (function (arglist__37374){
var args = cljs.core.seq(arglist__37374);
return G__37373__delegate(args);
});
G__37373.cljs$core$IFn$_invoke$arity$variadic = G__37373__delegate;
return G__37373;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__37379(s__37380){return (new cljs.core.LazySeq(null,(function (){var s__37380__$1 = s__37380;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37380__$1);if(temp__4126__auto__)
{var s__37380__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37380__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__37380__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__37382 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__37381 = (0);while(true){
if((i__37381 < size__4282__auto__))
{var args = cljs.core._nth.call(null,c__4281__auto__,i__37381);cljs.core.chunk_append.call(null,b__37382,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__37383 = (i__37381 + (1));
i__37381 = G__37383;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37382),iter__37379.call(null,cljs.core.chunk_rest.call(null,s__37380__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37382),null);
}
} else
{var args = cljs.core.first.call(null,s__37380__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__37379.call(null,cljs.core.rest.call(null,s__37380__$2)));
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
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__37388(s__37389){return (new cljs.core.LazySeq(null,(function (){var s__37389__$1 = s__37389;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37389__$1);if(temp__4126__auto__)
{var s__37389__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37389__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__37389__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__37391 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__37390 = (0);while(true){
if((i__37390 < size__4282__auto__))
{var style = cljs.core._nth.call(null,c__4281__auto__,i__37390);cljs.core.chunk_append.call(null,b__37391,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__37392 = (i__37390 + (1));
i__37390 = G__37392;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37391),iter__37388.call(null,cljs.core.chunk_rest.call(null,s__37389__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37391),null);
}
} else
{var style = cljs.core.first.call(null,s__37389__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__37388.call(null,cljs.core.rest.call(null,s__37389__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__37393){
var styles = cljs.core.seq(arglist__37393);
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
sablono.core.link_to37394 = (function() { 
var link_to37394__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to37394 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to37394__delegate.call(this,url,content);};
link_to37394.cljs$lang$maxFixedArity = 1;
link_to37394.cljs$lang$applyTo = (function (arglist__37395){
var url = cljs.core.first(arglist__37395);
var content = cljs.core.rest(arglist__37395);
return link_to37394__delegate(url,content);
});
link_to37394.cljs$core$IFn$_invoke$arity$variadic = link_to37394__delegate;
return link_to37394;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to37394);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to37396 = (function() { 
var mail_to37396__delegate = function (e_mail,p__37397){var vec__37399 = p__37397;var content = cljs.core.nth.call(null,vec__37399,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to37396 = function (e_mail,var_args){
var p__37397 = null;if (arguments.length > 1) {
  p__37397 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to37396__delegate.call(this,e_mail,p__37397);};
mail_to37396.cljs$lang$maxFixedArity = 1;
mail_to37396.cljs$lang$applyTo = (function (arglist__37400){
var e_mail = cljs.core.first(arglist__37400);
var p__37397 = cljs.core.rest(arglist__37400);
return mail_to37396__delegate(e_mail,p__37397);
});
mail_to37396.cljs$core$IFn$_invoke$arity$variadic = mail_to37396__delegate;
return mail_to37396;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to37396);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list37401 = (function unordered_list37401(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4283__auto__ = (function iter__37406(s__37407){return (new cljs.core.LazySeq(null,(function (){var s__37407__$1 = s__37407;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37407__$1);if(temp__4126__auto__)
{var s__37407__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37407__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__37407__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__37409 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__37408 = (0);while(true){
if((i__37408 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__37408);cljs.core.chunk_append.call(null,b__37409,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__37410 = (i__37408 + (1));
i__37408 = G__37410;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37409),iter__37406.call(null,cljs.core.chunk_rest.call(null,s__37407__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37409),null);
}
} else
{var x = cljs.core.first.call(null,s__37407__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__37406.call(null,cljs.core.rest.call(null,s__37407__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list37401);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list37411 = (function ordered_list37411(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4283__auto__ = (function iter__37416(s__37417){return (new cljs.core.LazySeq(null,(function (){var s__37417__$1 = s__37417;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37417__$1);if(temp__4126__auto__)
{var s__37417__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37417__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__37417__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__37419 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__37418 = (0);while(true){
if((i__37418 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__37418);cljs.core.chunk_append.call(null,b__37419,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__37420 = (i__37418 + (1));
i__37418 = G__37420;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37419),iter__37416.call(null,cljs.core.chunk_rest.call(null,s__37417__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37419),null);
}
} else
{var x = cljs.core.first.call(null,s__37417__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__37416.call(null,cljs.core.rest.call(null,s__37417__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list37411);
/**
* Create an image element.
*/
sablono.core.image37421 = (function() {
var image37421 = null;
var image37421__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image37421__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image37421 = function(src,alt){
switch(arguments.length){
case 1:
return image37421__1.call(this,src);
case 2:
return image37421__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image37421.cljs$core$IFn$_invoke$arity$1 = image37421__1;
image37421.cljs$core$IFn$_invoke$arity$2 = image37421__2;
return image37421;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image37421);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__37422_SHARP_,p2__37423_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37422_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37423_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__37424_SHARP_,p2__37425_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37424_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37425_SHARP_));
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
sablono.core.color_field37426 = (function() {
var color_field37426 = null;
var color_field37426__1 = (function (name__13522__auto__){return color_field37426.call(null,name__13522__auto__,null);
});
var color_field37426__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__13522__auto__,value__13523__auto__);
});
color_field37426 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return color_field37426__1.call(this,name__13522__auto__);
case 2:
return color_field37426__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field37426.cljs$core$IFn$_invoke$arity$1 = color_field37426__1;
color_field37426.cljs$core$IFn$_invoke$arity$2 = color_field37426__2;
return color_field37426;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field37426);
/**
* Creates a date input field.
*/
sablono.core.date_field37427 = (function() {
var date_field37427 = null;
var date_field37427__1 = (function (name__13522__auto__){return date_field37427.call(null,name__13522__auto__,null);
});
var date_field37427__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__13522__auto__,value__13523__auto__);
});
date_field37427 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return date_field37427__1.call(this,name__13522__auto__);
case 2:
return date_field37427__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field37427.cljs$core$IFn$_invoke$arity$1 = date_field37427__1;
date_field37427.cljs$core$IFn$_invoke$arity$2 = date_field37427__2;
return date_field37427;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field37427);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field37428 = (function() {
var datetime_field37428 = null;
var datetime_field37428__1 = (function (name__13522__auto__){return datetime_field37428.call(null,name__13522__auto__,null);
});
var datetime_field37428__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__13522__auto__,value__13523__auto__);
});
datetime_field37428 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return datetime_field37428__1.call(this,name__13522__auto__);
case 2:
return datetime_field37428__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field37428.cljs$core$IFn$_invoke$arity$1 = datetime_field37428__1;
datetime_field37428.cljs$core$IFn$_invoke$arity$2 = datetime_field37428__2;
return datetime_field37428;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field37428);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field37429 = (function() {
var datetime_local_field37429 = null;
var datetime_local_field37429__1 = (function (name__13522__auto__){return datetime_local_field37429.call(null,name__13522__auto__,null);
});
var datetime_local_field37429__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__13522__auto__,value__13523__auto__);
});
datetime_local_field37429 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return datetime_local_field37429__1.call(this,name__13522__auto__);
case 2:
return datetime_local_field37429__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field37429.cljs$core$IFn$_invoke$arity$1 = datetime_local_field37429__1;
datetime_local_field37429.cljs$core$IFn$_invoke$arity$2 = datetime_local_field37429__2;
return datetime_local_field37429;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field37429);
/**
* Creates a email input field.
*/
sablono.core.email_field37430 = (function() {
var email_field37430 = null;
var email_field37430__1 = (function (name__13522__auto__){return email_field37430.call(null,name__13522__auto__,null);
});
var email_field37430__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__13522__auto__,value__13523__auto__);
});
email_field37430 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return email_field37430__1.call(this,name__13522__auto__);
case 2:
return email_field37430__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field37430.cljs$core$IFn$_invoke$arity$1 = email_field37430__1;
email_field37430.cljs$core$IFn$_invoke$arity$2 = email_field37430__2;
return email_field37430;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field37430);
/**
* Creates a file input field.
*/
sablono.core.file_field37431 = (function() {
var file_field37431 = null;
var file_field37431__1 = (function (name__13522__auto__){return file_field37431.call(null,name__13522__auto__,null);
});
var file_field37431__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__13522__auto__,value__13523__auto__);
});
file_field37431 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return file_field37431__1.call(this,name__13522__auto__);
case 2:
return file_field37431__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field37431.cljs$core$IFn$_invoke$arity$1 = file_field37431__1;
file_field37431.cljs$core$IFn$_invoke$arity$2 = file_field37431__2;
return file_field37431;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field37431);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field37432 = (function() {
var hidden_field37432 = null;
var hidden_field37432__1 = (function (name__13522__auto__){return hidden_field37432.call(null,name__13522__auto__,null);
});
var hidden_field37432__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__13522__auto__,value__13523__auto__);
});
hidden_field37432 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return hidden_field37432__1.call(this,name__13522__auto__);
case 2:
return hidden_field37432__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field37432.cljs$core$IFn$_invoke$arity$1 = hidden_field37432__1;
hidden_field37432.cljs$core$IFn$_invoke$arity$2 = hidden_field37432__2;
return hidden_field37432;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field37432);
/**
* Creates a month input field.
*/
sablono.core.month_field37433 = (function() {
var month_field37433 = null;
var month_field37433__1 = (function (name__13522__auto__){return month_field37433.call(null,name__13522__auto__,null);
});
var month_field37433__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__13522__auto__,value__13523__auto__);
});
month_field37433 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return month_field37433__1.call(this,name__13522__auto__);
case 2:
return month_field37433__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field37433.cljs$core$IFn$_invoke$arity$1 = month_field37433__1;
month_field37433.cljs$core$IFn$_invoke$arity$2 = month_field37433__2;
return month_field37433;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field37433);
/**
* Creates a number input field.
*/
sablono.core.number_field37434 = (function() {
var number_field37434 = null;
var number_field37434__1 = (function (name__13522__auto__){return number_field37434.call(null,name__13522__auto__,null);
});
var number_field37434__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__13522__auto__,value__13523__auto__);
});
number_field37434 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return number_field37434__1.call(this,name__13522__auto__);
case 2:
return number_field37434__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field37434.cljs$core$IFn$_invoke$arity$1 = number_field37434__1;
number_field37434.cljs$core$IFn$_invoke$arity$2 = number_field37434__2;
return number_field37434;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field37434);
/**
* Creates a password input field.
*/
sablono.core.password_field37435 = (function() {
var password_field37435 = null;
var password_field37435__1 = (function (name__13522__auto__){return password_field37435.call(null,name__13522__auto__,null);
});
var password_field37435__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__13522__auto__,value__13523__auto__);
});
password_field37435 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return password_field37435__1.call(this,name__13522__auto__);
case 2:
return password_field37435__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field37435.cljs$core$IFn$_invoke$arity$1 = password_field37435__1;
password_field37435.cljs$core$IFn$_invoke$arity$2 = password_field37435__2;
return password_field37435;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field37435);
/**
* Creates a range input field.
*/
sablono.core.range_field37436 = (function() {
var range_field37436 = null;
var range_field37436__1 = (function (name__13522__auto__){return range_field37436.call(null,name__13522__auto__,null);
});
var range_field37436__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__13522__auto__,value__13523__auto__);
});
range_field37436 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return range_field37436__1.call(this,name__13522__auto__);
case 2:
return range_field37436__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field37436.cljs$core$IFn$_invoke$arity$1 = range_field37436__1;
range_field37436.cljs$core$IFn$_invoke$arity$2 = range_field37436__2;
return range_field37436;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field37436);
/**
* Creates a search input field.
*/
sablono.core.search_field37437 = (function() {
var search_field37437 = null;
var search_field37437__1 = (function (name__13522__auto__){return search_field37437.call(null,name__13522__auto__,null);
});
var search_field37437__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__13522__auto__,value__13523__auto__);
});
search_field37437 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return search_field37437__1.call(this,name__13522__auto__);
case 2:
return search_field37437__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field37437.cljs$core$IFn$_invoke$arity$1 = search_field37437__1;
search_field37437.cljs$core$IFn$_invoke$arity$2 = search_field37437__2;
return search_field37437;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field37437);
/**
* Creates a tel input field.
*/
sablono.core.tel_field37438 = (function() {
var tel_field37438 = null;
var tel_field37438__1 = (function (name__13522__auto__){return tel_field37438.call(null,name__13522__auto__,null);
});
var tel_field37438__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__13522__auto__,value__13523__auto__);
});
tel_field37438 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return tel_field37438__1.call(this,name__13522__auto__);
case 2:
return tel_field37438__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field37438.cljs$core$IFn$_invoke$arity$1 = tel_field37438__1;
tel_field37438.cljs$core$IFn$_invoke$arity$2 = tel_field37438__2;
return tel_field37438;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field37438);
/**
* Creates a text input field.
*/
sablono.core.text_field37439 = (function() {
var text_field37439 = null;
var text_field37439__1 = (function (name__13522__auto__){return text_field37439.call(null,name__13522__auto__,null);
});
var text_field37439__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__13522__auto__,value__13523__auto__);
});
text_field37439 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return text_field37439__1.call(this,name__13522__auto__);
case 2:
return text_field37439__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field37439.cljs$core$IFn$_invoke$arity$1 = text_field37439__1;
text_field37439.cljs$core$IFn$_invoke$arity$2 = text_field37439__2;
return text_field37439;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field37439);
/**
* Creates a time input field.
*/
sablono.core.time_field37440 = (function() {
var time_field37440 = null;
var time_field37440__1 = (function (name__13522__auto__){return time_field37440.call(null,name__13522__auto__,null);
});
var time_field37440__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__13522__auto__,value__13523__auto__);
});
time_field37440 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return time_field37440__1.call(this,name__13522__auto__);
case 2:
return time_field37440__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field37440.cljs$core$IFn$_invoke$arity$1 = time_field37440__1;
time_field37440.cljs$core$IFn$_invoke$arity$2 = time_field37440__2;
return time_field37440;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field37440);
/**
* Creates a url input field.
*/
sablono.core.url_field37441 = (function() {
var url_field37441 = null;
var url_field37441__1 = (function (name__13522__auto__){return url_field37441.call(null,name__13522__auto__,null);
});
var url_field37441__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__13522__auto__,value__13523__auto__);
});
url_field37441 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return url_field37441__1.call(this,name__13522__auto__);
case 2:
return url_field37441__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field37441.cljs$core$IFn$_invoke$arity$1 = url_field37441__1;
url_field37441.cljs$core$IFn$_invoke$arity$2 = url_field37441__2;
return url_field37441;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field37441);
/**
* Creates a week input field.
*/
sablono.core.week_field37442 = (function() {
var week_field37442 = null;
var week_field37442__1 = (function (name__13522__auto__){return week_field37442.call(null,name__13522__auto__,null);
});
var week_field37442__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__13522__auto__,value__13523__auto__);
});
week_field37442 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return week_field37442__1.call(this,name__13522__auto__);
case 2:
return week_field37442__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field37442.cljs$core$IFn$_invoke$arity$1 = week_field37442__1;
week_field37442.cljs$core$IFn$_invoke$arity$2 = week_field37442__2;
return week_field37442;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field37442);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box37443 = (function() {
var check_box37443 = null;
var check_box37443__1 = (function (name){return check_box37443.call(null,name,null);
});
var check_box37443__2 = (function (name,checked_QMARK_){return check_box37443.call(null,name,checked_QMARK_,"true");
});
var check_box37443__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box37443 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box37443__1.call(this,name);
case 2:
return check_box37443__2.call(this,name,checked_QMARK_);
case 3:
return check_box37443__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box37443.cljs$core$IFn$_invoke$arity$1 = check_box37443__1;
check_box37443.cljs$core$IFn$_invoke$arity$2 = check_box37443__2;
check_box37443.cljs$core$IFn$_invoke$arity$3 = check_box37443__3;
return check_box37443;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box37443);
/**
* Creates a radio button.
*/
sablono.core.radio_button37444 = (function() {
var radio_button37444 = null;
var radio_button37444__1 = (function (group){return radio_button37444.call(null,group,null);
});
var radio_button37444__2 = (function (group,checked_QMARK_){return radio_button37444.call(null,group,checked_QMARK_,"true");
});
var radio_button37444__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button37444 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button37444__1.call(this,group);
case 2:
return radio_button37444__2.call(this,group,checked_QMARK_);
case 3:
return radio_button37444__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button37444.cljs$core$IFn$_invoke$arity$1 = radio_button37444__1;
radio_button37444.cljs$core$IFn$_invoke$arity$2 = radio_button37444__2;
radio_button37444.cljs$core$IFn$_invoke$arity$3 = radio_button37444__3;
return radio_button37444;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button37444);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options37445 = (function() {
var select_options37445 = null;
var select_options37445__1 = (function (coll){return select_options37445.call(null,coll,null);
});
var select_options37445__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__37454(s__37455){return (new cljs.core.LazySeq(null,(function (){var s__37455__$1 = s__37455;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37455__$1);if(temp__4126__auto__)
{var s__37455__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37455__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__37455__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__37457 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__37456 = (0);while(true){
if((i__37456 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__37456);cljs.core.chunk_append.call(null,b__37457,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37460 = x;var text = cljs.core.nth.call(null,vec__37460,(0),null);var val = cljs.core.nth.call(null,vec__37460,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__37460,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options37445.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__37462 = (i__37456 + (1));
i__37456 = G__37462;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37457),iter__37454.call(null,cljs.core.chunk_rest.call(null,s__37455__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37457),null);
}
} else
{var x = cljs.core.first.call(null,s__37455__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37461 = x;var text = cljs.core.nth.call(null,vec__37461,(0),null);var val = cljs.core.nth.call(null,vec__37461,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__37461,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options37445.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__37454.call(null,cljs.core.rest.call(null,s__37455__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
});
select_options37445 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options37445__1.call(this,coll);
case 2:
return select_options37445__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options37445.cljs$core$IFn$_invoke$arity$1 = select_options37445__1;
select_options37445.cljs$core$IFn$_invoke$arity$2 = select_options37445__2;
return select_options37445;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options37445);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down37463 = (function() {
var drop_down37463 = null;
var drop_down37463__2 = (function (name,options){return drop_down37463.call(null,name,options,null);
});
var drop_down37463__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down37463 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down37463__2.call(this,name,options);
case 3:
return drop_down37463__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down37463.cljs$core$IFn$_invoke$arity$2 = drop_down37463__2;
drop_down37463.cljs$core$IFn$_invoke$arity$3 = drop_down37463__3;
return drop_down37463;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down37463);
/**
* Creates a text area element.
*/
sablono.core.text_area37464 = (function() {
var text_area37464 = null;
var text_area37464__1 = (function (name){return text_area37464.call(null,name,null);
});
var text_area37464__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area37464 = function(name,value){
switch(arguments.length){
case 1:
return text_area37464__1.call(this,name);
case 2:
return text_area37464__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area37464.cljs$core$IFn$_invoke$arity$1 = text_area37464__1;
text_area37464.cljs$core$IFn$_invoke$arity$2 = text_area37464__2;
return text_area37464;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area37464);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label37465 = (function label37465(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label37465);
/**
* Creates a submit button.
*/
sablono.core.submit_button37466 = (function submit_button37466(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button37466);
/**
* Creates a form reset button.
*/
sablono.core.reset_button37467 = (function reset_button37467(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button37467);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to37468 = (function() { 
var form_to37468__delegate = function (p__37469,body){var vec__37471 = p__37469;var method = cljs.core.nth.call(null,vec__37471,(0),null);var action = cljs.core.nth.call(null,vec__37471,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to37468 = function (p__37469,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to37468__delegate.call(this,p__37469,body);};
form_to37468.cljs$lang$maxFixedArity = 1;
form_to37468.cljs$lang$applyTo = (function (arglist__37472){
var p__37469 = cljs.core.first(arglist__37472);
var body = cljs.core.rest(arglist__37472);
return form_to37468__delegate(p__37469,body);
});
form_to37468.cljs$core$IFn$_invoke$arity$variadic = form_to37468__delegate;
return form_to37468;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to37468);
