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
var G__19204__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__19203 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__19203,(0),null);var body = cljs.core.nthnext.call(null,vec__19203,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__19204 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19204__delegate.call(this,args);};
G__19204.cljs$lang$maxFixedArity = 0;
G__19204.cljs$lang$applyTo = (function (arglist__19205){
var args = cljs.core.seq(arglist__19205);
return G__19204__delegate(args);
});
G__19204.cljs$core$IFn$_invoke$arity$variadic = G__19204__delegate;
return G__19204;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__19210(s__19211){return (new cljs.core.LazySeq(null,(function (){var s__19211__$1 = s__19211;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19211__$1);if(temp__4126__auto__)
{var s__19211__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19211__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__19211__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__19213 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__19212 = (0);while(true){
if((i__19212 < size__4282__auto__))
{var args = cljs.core._nth.call(null,c__4281__auto__,i__19212);cljs.core.chunk_append.call(null,b__19213,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__19214 = (i__19212 + (1));
i__19212 = G__19214;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19213),iter__19210.call(null,cljs.core.chunk_rest.call(null,s__19211__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19213),null);
}
} else
{var args = cljs.core.first.call(null,s__19211__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__19210.call(null,cljs.core.rest.call(null,s__19211__$2)));
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
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__19219(s__19220){return (new cljs.core.LazySeq(null,(function (){var s__19220__$1 = s__19220;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19220__$1);if(temp__4126__auto__)
{var s__19220__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19220__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__19220__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__19222 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__19221 = (0);while(true){
if((i__19221 < size__4282__auto__))
{var style = cljs.core._nth.call(null,c__4281__auto__,i__19221);cljs.core.chunk_append.call(null,b__19222,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__19223 = (i__19221 + (1));
i__19221 = G__19223;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19222),iter__19219.call(null,cljs.core.chunk_rest.call(null,s__19220__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19222),null);
}
} else
{var style = cljs.core.first.call(null,s__19220__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__19219.call(null,cljs.core.rest.call(null,s__19220__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__19224){
var styles = cljs.core.seq(arglist__19224);
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
sablono.core.link_to19225 = (function() { 
var link_to19225__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to19225 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to19225__delegate.call(this,url,content);};
link_to19225.cljs$lang$maxFixedArity = 1;
link_to19225.cljs$lang$applyTo = (function (arglist__19226){
var url = cljs.core.first(arglist__19226);
var content = cljs.core.rest(arglist__19226);
return link_to19225__delegate(url,content);
});
link_to19225.cljs$core$IFn$_invoke$arity$variadic = link_to19225__delegate;
return link_to19225;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to19225);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to19227 = (function() { 
var mail_to19227__delegate = function (e_mail,p__19228){var vec__19230 = p__19228;var content = cljs.core.nth.call(null,vec__19230,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to19227 = function (e_mail,var_args){
var p__19228 = null;if (arguments.length > 1) {
  p__19228 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to19227__delegate.call(this,e_mail,p__19228);};
mail_to19227.cljs$lang$maxFixedArity = 1;
mail_to19227.cljs$lang$applyTo = (function (arglist__19231){
var e_mail = cljs.core.first(arglist__19231);
var p__19228 = cljs.core.rest(arglist__19231);
return mail_to19227__delegate(e_mail,p__19228);
});
mail_to19227.cljs$core$IFn$_invoke$arity$variadic = mail_to19227__delegate;
return mail_to19227;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to19227);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list19232 = (function unordered_list19232(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4283__auto__ = (function iter__19237(s__19238){return (new cljs.core.LazySeq(null,(function (){var s__19238__$1 = s__19238;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19238__$1);if(temp__4126__auto__)
{var s__19238__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19238__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__19238__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__19240 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__19239 = (0);while(true){
if((i__19239 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__19239);cljs.core.chunk_append.call(null,b__19240,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__19241 = (i__19239 + (1));
i__19239 = G__19241;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19240),iter__19237.call(null,cljs.core.chunk_rest.call(null,s__19238__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19240),null);
}
} else
{var x = cljs.core.first.call(null,s__19238__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__19237.call(null,cljs.core.rest.call(null,s__19238__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list19232);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list19242 = (function ordered_list19242(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4283__auto__ = (function iter__19247(s__19248){return (new cljs.core.LazySeq(null,(function (){var s__19248__$1 = s__19248;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19248__$1);if(temp__4126__auto__)
{var s__19248__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19248__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__19248__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__19250 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__19249 = (0);while(true){
if((i__19249 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__19249);cljs.core.chunk_append.call(null,b__19250,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__19251 = (i__19249 + (1));
i__19249 = G__19251;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19250),iter__19247.call(null,cljs.core.chunk_rest.call(null,s__19248__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19250),null);
}
} else
{var x = cljs.core.first.call(null,s__19248__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__19247.call(null,cljs.core.rest.call(null,s__19248__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list19242);
/**
* Create an image element.
*/
sablono.core.image19252 = (function() {
var image19252 = null;
var image19252__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image19252__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image19252 = function(src,alt){
switch(arguments.length){
case 1:
return image19252__1.call(this,src);
case 2:
return image19252__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image19252.cljs$core$IFn$_invoke$arity$1 = image19252__1;
image19252.cljs$core$IFn$_invoke$arity$2 = image19252__2;
return image19252;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image19252);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__19253_SHARP_,p2__19254_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19253_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__19254_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__19255_SHARP_,p2__19256_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19255_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__19256_SHARP_));
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
sablono.core.color_field19257 = (function() {
var color_field19257 = null;
var color_field19257__1 = (function (name__10239__auto__){return color_field19257.call(null,name__10239__auto__,null);
});
var color_field19257__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10239__auto__,value__10240__auto__);
});
color_field19257 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return color_field19257__1.call(this,name__10239__auto__);
case 2:
return color_field19257__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field19257.cljs$core$IFn$_invoke$arity$1 = color_field19257__1;
color_field19257.cljs$core$IFn$_invoke$arity$2 = color_field19257__2;
return color_field19257;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field19257);
/**
* Creates a date input field.
*/
sablono.core.date_field19258 = (function() {
var date_field19258 = null;
var date_field19258__1 = (function (name__10239__auto__){return date_field19258.call(null,name__10239__auto__,null);
});
var date_field19258__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10239__auto__,value__10240__auto__);
});
date_field19258 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return date_field19258__1.call(this,name__10239__auto__);
case 2:
return date_field19258__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field19258.cljs$core$IFn$_invoke$arity$1 = date_field19258__1;
date_field19258.cljs$core$IFn$_invoke$arity$2 = date_field19258__2;
return date_field19258;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field19258);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field19259 = (function() {
var datetime_field19259 = null;
var datetime_field19259__1 = (function (name__10239__auto__){return datetime_field19259.call(null,name__10239__auto__,null);
});
var datetime_field19259__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10239__auto__,value__10240__auto__);
});
datetime_field19259 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return datetime_field19259__1.call(this,name__10239__auto__);
case 2:
return datetime_field19259__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field19259.cljs$core$IFn$_invoke$arity$1 = datetime_field19259__1;
datetime_field19259.cljs$core$IFn$_invoke$arity$2 = datetime_field19259__2;
return datetime_field19259;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field19259);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field19260 = (function() {
var datetime_local_field19260 = null;
var datetime_local_field19260__1 = (function (name__10239__auto__){return datetime_local_field19260.call(null,name__10239__auto__,null);
});
var datetime_local_field19260__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10239__auto__,value__10240__auto__);
});
datetime_local_field19260 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return datetime_local_field19260__1.call(this,name__10239__auto__);
case 2:
return datetime_local_field19260__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field19260.cljs$core$IFn$_invoke$arity$1 = datetime_local_field19260__1;
datetime_local_field19260.cljs$core$IFn$_invoke$arity$2 = datetime_local_field19260__2;
return datetime_local_field19260;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field19260);
/**
* Creates a email input field.
*/
sablono.core.email_field19261 = (function() {
var email_field19261 = null;
var email_field19261__1 = (function (name__10239__auto__){return email_field19261.call(null,name__10239__auto__,null);
});
var email_field19261__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10239__auto__,value__10240__auto__);
});
email_field19261 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return email_field19261__1.call(this,name__10239__auto__);
case 2:
return email_field19261__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field19261.cljs$core$IFn$_invoke$arity$1 = email_field19261__1;
email_field19261.cljs$core$IFn$_invoke$arity$2 = email_field19261__2;
return email_field19261;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field19261);
/**
* Creates a file input field.
*/
sablono.core.file_field19262 = (function() {
var file_field19262 = null;
var file_field19262__1 = (function (name__10239__auto__){return file_field19262.call(null,name__10239__auto__,null);
});
var file_field19262__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10239__auto__,value__10240__auto__);
});
file_field19262 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return file_field19262__1.call(this,name__10239__auto__);
case 2:
return file_field19262__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field19262.cljs$core$IFn$_invoke$arity$1 = file_field19262__1;
file_field19262.cljs$core$IFn$_invoke$arity$2 = file_field19262__2;
return file_field19262;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field19262);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field19263 = (function() {
var hidden_field19263 = null;
var hidden_field19263__1 = (function (name__10239__auto__){return hidden_field19263.call(null,name__10239__auto__,null);
});
var hidden_field19263__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10239__auto__,value__10240__auto__);
});
hidden_field19263 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return hidden_field19263__1.call(this,name__10239__auto__);
case 2:
return hidden_field19263__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field19263.cljs$core$IFn$_invoke$arity$1 = hidden_field19263__1;
hidden_field19263.cljs$core$IFn$_invoke$arity$2 = hidden_field19263__2;
return hidden_field19263;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field19263);
/**
* Creates a month input field.
*/
sablono.core.month_field19264 = (function() {
var month_field19264 = null;
var month_field19264__1 = (function (name__10239__auto__){return month_field19264.call(null,name__10239__auto__,null);
});
var month_field19264__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10239__auto__,value__10240__auto__);
});
month_field19264 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return month_field19264__1.call(this,name__10239__auto__);
case 2:
return month_field19264__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field19264.cljs$core$IFn$_invoke$arity$1 = month_field19264__1;
month_field19264.cljs$core$IFn$_invoke$arity$2 = month_field19264__2;
return month_field19264;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field19264);
/**
* Creates a number input field.
*/
sablono.core.number_field19265 = (function() {
var number_field19265 = null;
var number_field19265__1 = (function (name__10239__auto__){return number_field19265.call(null,name__10239__auto__,null);
});
var number_field19265__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10239__auto__,value__10240__auto__);
});
number_field19265 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return number_field19265__1.call(this,name__10239__auto__);
case 2:
return number_field19265__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field19265.cljs$core$IFn$_invoke$arity$1 = number_field19265__1;
number_field19265.cljs$core$IFn$_invoke$arity$2 = number_field19265__2;
return number_field19265;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field19265);
/**
* Creates a password input field.
*/
sablono.core.password_field19266 = (function() {
var password_field19266 = null;
var password_field19266__1 = (function (name__10239__auto__){return password_field19266.call(null,name__10239__auto__,null);
});
var password_field19266__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10239__auto__,value__10240__auto__);
});
password_field19266 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return password_field19266__1.call(this,name__10239__auto__);
case 2:
return password_field19266__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field19266.cljs$core$IFn$_invoke$arity$1 = password_field19266__1;
password_field19266.cljs$core$IFn$_invoke$arity$2 = password_field19266__2;
return password_field19266;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field19266);
/**
* Creates a range input field.
*/
sablono.core.range_field19267 = (function() {
var range_field19267 = null;
var range_field19267__1 = (function (name__10239__auto__){return range_field19267.call(null,name__10239__auto__,null);
});
var range_field19267__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10239__auto__,value__10240__auto__);
});
range_field19267 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return range_field19267__1.call(this,name__10239__auto__);
case 2:
return range_field19267__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field19267.cljs$core$IFn$_invoke$arity$1 = range_field19267__1;
range_field19267.cljs$core$IFn$_invoke$arity$2 = range_field19267__2;
return range_field19267;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field19267);
/**
* Creates a search input field.
*/
sablono.core.search_field19268 = (function() {
var search_field19268 = null;
var search_field19268__1 = (function (name__10239__auto__){return search_field19268.call(null,name__10239__auto__,null);
});
var search_field19268__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10239__auto__,value__10240__auto__);
});
search_field19268 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return search_field19268__1.call(this,name__10239__auto__);
case 2:
return search_field19268__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field19268.cljs$core$IFn$_invoke$arity$1 = search_field19268__1;
search_field19268.cljs$core$IFn$_invoke$arity$2 = search_field19268__2;
return search_field19268;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field19268);
/**
* Creates a tel input field.
*/
sablono.core.tel_field19269 = (function() {
var tel_field19269 = null;
var tel_field19269__1 = (function (name__10239__auto__){return tel_field19269.call(null,name__10239__auto__,null);
});
var tel_field19269__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10239__auto__,value__10240__auto__);
});
tel_field19269 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return tel_field19269__1.call(this,name__10239__auto__);
case 2:
return tel_field19269__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field19269.cljs$core$IFn$_invoke$arity$1 = tel_field19269__1;
tel_field19269.cljs$core$IFn$_invoke$arity$2 = tel_field19269__2;
return tel_field19269;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field19269);
/**
* Creates a text input field.
*/
sablono.core.text_field19270 = (function() {
var text_field19270 = null;
var text_field19270__1 = (function (name__10239__auto__){return text_field19270.call(null,name__10239__auto__,null);
});
var text_field19270__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10239__auto__,value__10240__auto__);
});
text_field19270 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return text_field19270__1.call(this,name__10239__auto__);
case 2:
return text_field19270__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field19270.cljs$core$IFn$_invoke$arity$1 = text_field19270__1;
text_field19270.cljs$core$IFn$_invoke$arity$2 = text_field19270__2;
return text_field19270;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field19270);
/**
* Creates a time input field.
*/
sablono.core.time_field19271 = (function() {
var time_field19271 = null;
var time_field19271__1 = (function (name__10239__auto__){return time_field19271.call(null,name__10239__auto__,null);
});
var time_field19271__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10239__auto__,value__10240__auto__);
});
time_field19271 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return time_field19271__1.call(this,name__10239__auto__);
case 2:
return time_field19271__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field19271.cljs$core$IFn$_invoke$arity$1 = time_field19271__1;
time_field19271.cljs$core$IFn$_invoke$arity$2 = time_field19271__2;
return time_field19271;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field19271);
/**
* Creates a url input field.
*/
sablono.core.url_field19272 = (function() {
var url_field19272 = null;
var url_field19272__1 = (function (name__10239__auto__){return url_field19272.call(null,name__10239__auto__,null);
});
var url_field19272__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10239__auto__,value__10240__auto__);
});
url_field19272 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return url_field19272__1.call(this,name__10239__auto__);
case 2:
return url_field19272__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field19272.cljs$core$IFn$_invoke$arity$1 = url_field19272__1;
url_field19272.cljs$core$IFn$_invoke$arity$2 = url_field19272__2;
return url_field19272;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field19272);
/**
* Creates a week input field.
*/
sablono.core.week_field19273 = (function() {
var week_field19273 = null;
var week_field19273__1 = (function (name__10239__auto__){return week_field19273.call(null,name__10239__auto__,null);
});
var week_field19273__2 = (function (name__10239__auto__,value__10240__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10239__auto__,value__10240__auto__);
});
week_field19273 = function(name__10239__auto__,value__10240__auto__){
switch(arguments.length){
case 1:
return week_field19273__1.call(this,name__10239__auto__);
case 2:
return week_field19273__2.call(this,name__10239__auto__,value__10240__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field19273.cljs$core$IFn$_invoke$arity$1 = week_field19273__1;
week_field19273.cljs$core$IFn$_invoke$arity$2 = week_field19273__2;
return week_field19273;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field19273);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box19274 = (function() {
var check_box19274 = null;
var check_box19274__1 = (function (name){return check_box19274.call(null,name,null);
});
var check_box19274__2 = (function (name,checked_QMARK_){return check_box19274.call(null,name,checked_QMARK_,"true");
});
var check_box19274__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box19274 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box19274__1.call(this,name);
case 2:
return check_box19274__2.call(this,name,checked_QMARK_);
case 3:
return check_box19274__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box19274.cljs$core$IFn$_invoke$arity$1 = check_box19274__1;
check_box19274.cljs$core$IFn$_invoke$arity$2 = check_box19274__2;
check_box19274.cljs$core$IFn$_invoke$arity$3 = check_box19274__3;
return check_box19274;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box19274);
/**
* Creates a radio button.
*/
sablono.core.radio_button19275 = (function() {
var radio_button19275 = null;
var radio_button19275__1 = (function (group){return radio_button19275.call(null,group,null);
});
var radio_button19275__2 = (function (group,checked_QMARK_){return radio_button19275.call(null,group,checked_QMARK_,"true");
});
var radio_button19275__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button19275 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button19275__1.call(this,group);
case 2:
return radio_button19275__2.call(this,group,checked_QMARK_);
case 3:
return radio_button19275__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button19275.cljs$core$IFn$_invoke$arity$1 = radio_button19275__1;
radio_button19275.cljs$core$IFn$_invoke$arity$2 = radio_button19275__2;
radio_button19275.cljs$core$IFn$_invoke$arity$3 = radio_button19275__3;
return radio_button19275;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button19275);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options19276 = (function() {
var select_options19276 = null;
var select_options19276__1 = (function (coll){return select_options19276.call(null,coll,null);
});
var select_options19276__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__19285(s__19286){return (new cljs.core.LazySeq(null,(function (){var s__19286__$1 = s__19286;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19286__$1);if(temp__4126__auto__)
{var s__19286__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19286__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__19286__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__19288 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__19287 = (0);while(true){
if((i__19287 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__19287);cljs.core.chunk_append.call(null,b__19288,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__19291 = x;var text = cljs.core.nth.call(null,vec__19291,(0),null);var val = cljs.core.nth.call(null,vec__19291,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__19291,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options19276.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__19293 = (i__19287 + (1));
i__19287 = G__19293;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19288),iter__19285.call(null,cljs.core.chunk_rest.call(null,s__19286__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19288),null);
}
} else
{var x = cljs.core.first.call(null,s__19286__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__19292 = x;var text = cljs.core.nth.call(null,vec__19292,(0),null);var val = cljs.core.nth.call(null,vec__19292,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__19292,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options19276.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__19285.call(null,cljs.core.rest.call(null,s__19286__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
});
select_options19276 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options19276__1.call(this,coll);
case 2:
return select_options19276__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options19276.cljs$core$IFn$_invoke$arity$1 = select_options19276__1;
select_options19276.cljs$core$IFn$_invoke$arity$2 = select_options19276__2;
return select_options19276;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options19276);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down19294 = (function() {
var drop_down19294 = null;
var drop_down19294__2 = (function (name,options){return drop_down19294.call(null,name,options,null);
});
var drop_down19294__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down19294 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down19294__2.call(this,name,options);
case 3:
return drop_down19294__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down19294.cljs$core$IFn$_invoke$arity$2 = drop_down19294__2;
drop_down19294.cljs$core$IFn$_invoke$arity$3 = drop_down19294__3;
return drop_down19294;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down19294);
/**
* Creates a text area element.
*/
sablono.core.text_area19295 = (function() {
var text_area19295 = null;
var text_area19295__1 = (function (name){return text_area19295.call(null,name,null);
});
var text_area19295__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area19295 = function(name,value){
switch(arguments.length){
case 1:
return text_area19295__1.call(this,name);
case 2:
return text_area19295__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area19295.cljs$core$IFn$_invoke$arity$1 = text_area19295__1;
text_area19295.cljs$core$IFn$_invoke$arity$2 = text_area19295__2;
return text_area19295;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area19295);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label19296 = (function label19296(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label19296);
/**
* Creates a submit button.
*/
sablono.core.submit_button19297 = (function submit_button19297(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button19297);
/**
* Creates a form reset button.
*/
sablono.core.reset_button19298 = (function reset_button19298(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button19298);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to19299 = (function() { 
var form_to19299__delegate = function (p__19300,body){var vec__19302 = p__19300;var method = cljs.core.nth.call(null,vec__19302,(0),null);var action = cljs.core.nth.call(null,vec__19302,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to19299 = function (p__19300,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to19299__delegate.call(this,p__19300,body);};
form_to19299.cljs$lang$maxFixedArity = 1;
form_to19299.cljs$lang$applyTo = (function (arglist__19303){
var p__19300 = cljs.core.first(arglist__19303);
var body = cljs.core.rest(arglist__19303);
return form_to19299__delegate(p__19300,body);
});
form_to19299.cljs$core$IFn$_invoke$arity$variadic = form_to19299__delegate;
return form_to19299;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to19299);
