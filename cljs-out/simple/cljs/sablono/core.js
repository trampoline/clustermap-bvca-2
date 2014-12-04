// Compiled by ClojureScript 0.0-2356
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
var G__19105__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__19104 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__19104,(0),null);var body = cljs.core.nthnext.call(null,vec__19104,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__19105 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19105__delegate.call(this,args);};
G__19105.cljs$lang$maxFixedArity = 0;
G__19105.cljs$lang$applyTo = (function (arglist__19106){
var args = cljs.core.seq(arglist__19106);
return G__19105__delegate(args);
});
G__19105.cljs$core$IFn$_invoke$arity$variadic = G__19105__delegate;
return G__19105;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4377__auto__ = (function iter__19111(s__19112){return (new cljs.core.LazySeq(null,(function (){var s__19112__$1 = s__19112;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19112__$1);if(temp__4126__auto__)
{var s__19112__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19112__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19112__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19114 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19113 = (0);while(true){
if((i__19113 < size__4376__auto__))
{var args = cljs.core._nth.call(null,c__4375__auto__,i__19113);cljs.core.chunk_append.call(null,b__19114,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__19115 = (i__19113 + (1));
i__19113 = G__19115;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19114),iter__19111.call(null,cljs.core.chunk_rest.call(null,s__19112__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19114),null);
}
} else
{var args = cljs.core.first.call(null,s__19112__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__19111.call(null,cljs.core.rest.call(null,s__19112__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,arglists);
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
var include_css__delegate = function (styles){var iter__4377__auto__ = (function iter__19120(s__19121){return (new cljs.core.LazySeq(null,(function (){var s__19121__$1 = s__19121;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19121__$1);if(temp__4126__auto__)
{var s__19121__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19121__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19121__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19123 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19122 = (0);while(true){
if((i__19122 < size__4376__auto__))
{var style = cljs.core._nth.call(null,c__4375__auto__,i__19122);cljs.core.chunk_append.call(null,b__19123,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__19124 = (i__19122 + (1));
i__19122 = G__19124;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19123),iter__19120.call(null,cljs.core.chunk_rest.call(null,s__19121__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19123),null);
}
} else
{var style = cljs.core.first.call(null,s__19121__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__19120.call(null,cljs.core.rest.call(null,s__19121__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__19125){
var styles = cljs.core.seq(arglist__19125);
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
sablono.core.link_to19126 = (function() { 
var link_to19126__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to19126 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to19126__delegate.call(this,url,content);};
link_to19126.cljs$lang$maxFixedArity = 1;
link_to19126.cljs$lang$applyTo = (function (arglist__19127){
var url = cljs.core.first(arglist__19127);
var content = cljs.core.rest(arglist__19127);
return link_to19126__delegate(url,content);
});
link_to19126.cljs$core$IFn$_invoke$arity$variadic = link_to19126__delegate;
return link_to19126;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to19126);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to19128 = (function() { 
var mail_to19128__delegate = function (e_mail,p__19129){var vec__19131 = p__19129;var content = cljs.core.nth.call(null,vec__19131,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3639__auto__ = content;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to19128 = function (e_mail,var_args){
var p__19129 = null;if (arguments.length > 1) {
  p__19129 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to19128__delegate.call(this,e_mail,p__19129);};
mail_to19128.cljs$lang$maxFixedArity = 1;
mail_to19128.cljs$lang$applyTo = (function (arglist__19132){
var e_mail = cljs.core.first(arglist__19132);
var p__19129 = cljs.core.rest(arglist__19132);
return mail_to19128__delegate(e_mail,p__19129);
});
mail_to19128.cljs$core$IFn$_invoke$arity$variadic = mail_to19128__delegate;
return mail_to19128;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to19128);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list19133 = (function unordered_list19133(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4377__auto__ = (function iter__19138(s__19139){return (new cljs.core.LazySeq(null,(function (){var s__19139__$1 = s__19139;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19139__$1);if(temp__4126__auto__)
{var s__19139__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19139__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19139__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19141 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19140 = (0);while(true){
if((i__19140 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__19140);cljs.core.chunk_append.call(null,b__19141,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__19142 = (i__19140 + (1));
i__19140 = G__19142;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19141),iter__19138.call(null,cljs.core.chunk_rest.call(null,s__19139__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19141),null);
}
} else
{var x = cljs.core.first.call(null,s__19139__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__19138.call(null,cljs.core.rest.call(null,s__19139__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list19133);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list19143 = (function ordered_list19143(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4377__auto__ = (function iter__19148(s__19149){return (new cljs.core.LazySeq(null,(function (){var s__19149__$1 = s__19149;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19149__$1);if(temp__4126__auto__)
{var s__19149__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19149__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19149__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19151 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19150 = (0);while(true){
if((i__19150 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__19150);cljs.core.chunk_append.call(null,b__19151,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__19152 = (i__19150 + (1));
i__19150 = G__19152;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19151),iter__19148.call(null,cljs.core.chunk_rest.call(null,s__19149__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19151),null);
}
} else
{var x = cljs.core.first.call(null,s__19149__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__19148.call(null,cljs.core.rest.call(null,s__19149__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list19143);
/**
* Create an image element.
*/
sablono.core.image19153 = (function() {
var image19153 = null;
var image19153__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image19153__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image19153 = function(src,alt){
switch(arguments.length){
case 1:
return image19153__1.call(this,src);
case 2:
return image19153__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image19153.cljs$core$IFn$_invoke$arity$1 = image19153__1;
image19153.cljs$core$IFn$_invoke$arity$2 = image19153__2;
return image19153;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image19153);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__19154_SHARP_,p2__19155_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19154_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__19155_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__19156_SHARP_,p2__19157_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19156_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__19157_SHARP_));
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
sablono.core.color_field19158 = (function() {
var color_field19158 = null;
var color_field19158__1 = (function (name__10710__auto__){return color_field19158.call(null,name__10710__auto__,null);
});
var color_field19158__2 = (function (name__10710__auto__,value__10711__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10710__auto__,value__10711__auto__);
});
color_field19158 = function(name__10710__auto__,value__10711__auto__){
switch(arguments.length){
case 1:
return color_field19158__1.call(this,name__10710__auto__);
case 2:
return color_field19158__2.call(this,name__10710__auto__,value__10711__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field19158.cljs$core$IFn$_invoke$arity$1 = color_field19158__1;
color_field19158.cljs$core$IFn$_invoke$arity$2 = color_field19158__2;
return color_field19158;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field19158);
/**
* Creates a date input field.
*/
sablono.core.date_field19159 = (function() {
var date_field19159 = null;
var date_field19159__1 = (function (name__10710__auto__){return date_field19159.call(null,name__10710__auto__,null);
});
var date_field19159__2 = (function (name__10710__auto__,value__10711__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10710__auto__,value__10711__auto__);
});
date_field19159 = function(name__10710__auto__,value__10711__auto__){
switch(arguments.length){
case 1:
return date_field19159__1.call(this,name__10710__auto__);
case 2:
return date_field19159__2.call(this,name__10710__auto__,value__10711__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field19159.cljs$core$IFn$_invoke$arity$1 = date_field19159__1;
date_field19159.cljs$core$IFn$_invoke$arity$2 = date_field19159__2;
return date_field19159;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field19159);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field19160 = (function() {
var datetime_field19160 = null;
var datetime_field19160__1 = (function (name__10710__auto__){return datetime_field19160.call(null,name__10710__auto__,null);
});
var datetime_field19160__2 = (function (name__10710__auto__,value__10711__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10710__auto__,value__10711__auto__);
});
datetime_field19160 = function(name__10710__auto__,value__10711__auto__){
switch(arguments.length){
case 1:
return datetime_field19160__1.call(this,name__10710__auto__);
case 2:
return datetime_field19160__2.call(this,name__10710__auto__,value__10711__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field19160.cljs$core$IFn$_invoke$arity$1 = datetime_field19160__1;
datetime_field19160.cljs$core$IFn$_invoke$arity$2 = datetime_field19160__2;
return datetime_field19160;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field19160);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field19161 = (function() {
var datetime_local_field19161 = null;
var datetime_local_field19161__1 = (function (name__10710__auto__){return datetime_local_field19161.call(null,name__10710__auto__,null);
});
var datetime_local_field19161__2 = (function (name__10710__auto__,value__10711__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10710__auto__,value__10711__auto__);
});
datetime_local_field19161 = function(name__10710__auto__,value__10711__auto__){
switch(arguments.length){
case 1:
return datetime_local_field19161__1.call(this,name__10710__auto__);
case 2:
return datetime_local_field19161__2.call(this,name__10710__auto__,value__10711__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field19161.cljs$core$IFn$_invoke$arity$1 = datetime_local_field19161__1;
datetime_local_field19161.cljs$core$IFn$_invoke$arity$2 = datetime_local_field19161__2;
return datetime_local_field19161;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field19161);
/**
* Creates a email input field.
*/
sablono.core.email_field19162 = (function() {
var email_field19162 = null;
var email_field19162__1 = (function (name__10710__auto__){return email_field19162.call(null,name__10710__auto__,null);
});
var email_field19162__2 = (function (name__10710__auto__,value__10711__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10710__auto__,value__10711__auto__);
});
email_field19162 = function(name__10710__auto__,value__10711__auto__){
switch(arguments.length){
case 1:
return email_field19162__1.call(this,name__10710__auto__);
case 2:
return email_field19162__2.call(this,name__10710__auto__,value__10711__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field19162.cljs$core$IFn$_invoke$arity$1 = email_field19162__1;
email_field19162.cljs$core$IFn$_invoke$arity$2 = email_field19162__2;
return email_field19162;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field19162);
/**
* Creates a file input field.
*/
sablono.core.file_field19163 = (function() {
var file_field19163 = null;
var file_field19163__1 = (function (name__10710__auto__){return file_field19163.call(null,name__10710__auto__,null);
});
var file_field19163__2 = (function (name__10710__auto__,value__10711__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10710__auto__,value__10711__auto__);
});
file_field19163 = function(name__10710__auto__,value__10711__auto__){
switch(arguments.length){
case 1:
return file_field19163__1.call(this,name__10710__auto__);
case 2:
return file_field19163__2.call(this,name__10710__auto__,value__10711__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field19163.cljs$core$IFn$_invoke$arity$1 = file_field19163__1;
file_field19163.cljs$core$IFn$_invoke$arity$2 = file_field19163__2;
return file_field19163;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field19163);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field19164 = (function() {
var hidden_field19164 = null;
var hidden_field19164__1 = (function (name__10710__auto__){return hidden_field19164.call(null,name__10710__auto__,null);
});
var hidden_field19164__2 = (function (name__10710__auto__,value__10711__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10710__auto__,value__10711__auto__);
});
hidden_field19164 = function(name__10710__auto__,value__10711__auto__){
switch(arguments.length){
case 1:
return hidden_field19164__1.call(this,name__10710__auto__);
case 2:
return hidden_field19164__2.call(this,name__10710__auto__,value__10711__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field19164.cljs$core$IFn$_invoke$arity$1 = hidden_field19164__1;
hidden_field19164.cljs$core$IFn$_invoke$arity$2 = hidden_field19164__2;
return hidden_field19164;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field19164);
/**
* Creates a month input field.
*/
sablono.core.month_field19165 = (function() {
var month_field19165 = null;
var month_field19165__1 = (function (name__10710__auto__){return month_field19165.call(null,name__10710__auto__,null);
});
var month_field19165__2 = (function (name__10710__auto__,value__10711__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10710__auto__,value__10711__auto__);
});
month_field19165 = function(name__10710__auto__,value__10711__auto__){
switch(arguments.length){
case 1:
return month_field19165__1.call(this,name__10710__auto__);
case 2:
return month_field19165__2.call(this,name__10710__auto__,value__10711__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field19165.cljs$core$IFn$_invoke$arity$1 = month_field19165__1;
month_field19165.cljs$core$IFn$_invoke$arity$2 = month_field19165__2;
return month_field19165;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field19165);
/**
* Creates a number input field.
*/
sablono.core.number_field19166 = (function() {
var number_field19166 = null;
var number_field19166__1 = (function (name__10710__auto__){return number_field19166.call(null,name__10710__auto__,null);
});
var number_field19166__2 = (function (name__10710__auto__,value__10711__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10710__auto__,value__10711__auto__);
});
number_field19166 = function(name__10710__auto__,value__10711__auto__){
switch(arguments.length){
case 1:
return number_field19166__1.call(this,name__10710__auto__);
case 2:
return number_field19166__2.call(this,name__10710__auto__,value__10711__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field19166.cljs$core$IFn$_invoke$arity$1 = number_field19166__1;
number_field19166.cljs$core$IFn$_invoke$arity$2 = number_field19166__2;
return number_field19166;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field19166);
/**
* Creates a password input field.
*/
sablono.core.password_field19167 = (function() {
var password_field19167 = null;
var password_field19167__1 = (function (name__10710__auto__){return password_field19167.call(null,name__10710__auto__,null);
});
var password_field19167__2 = (function (name__10710__auto__,value__10711__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10710__auto__,value__10711__auto__);
});
password_field19167 = function(name__10710__auto__,value__10711__auto__){
switch(arguments.length){
case 1:
return password_field19167__1.call(this,name__10710__auto__);
case 2:
return password_field19167__2.call(this,name__10710__auto__,value__10711__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field19167.cljs$core$IFn$_invoke$arity$1 = password_field19167__1;
password_field19167.cljs$core$IFn$_invoke$arity$2 = password_field19167__2;
return password_field19167;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field19167);
/**
* Creates a range input field.
*/
sablono.core.range_field19168 = (function() {
var range_field19168 = null;
var range_field19168__1 = (function (name__10710__auto__){return range_field19168.call(null,name__10710__auto__,null);
});
var range_field19168__2 = (function (name__10710__auto__,value__10711__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10710__auto__,value__10711__auto__);
});
range_field19168 = function(name__10710__auto__,value__10711__auto__){
switch(arguments.length){
case 1:
return range_field19168__1.call(this,name__10710__auto__);
case 2:
return range_field19168__2.call(this,name__10710__auto__,value__10711__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field19168.cljs$core$IFn$_invoke$arity$1 = range_field19168__1;
range_field19168.cljs$core$IFn$_invoke$arity$2 = range_field19168__2;
return range_field19168;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field19168);
/**
* Creates a search input field.
*/
sablono.core.search_field19169 = (function() {
var search_field19169 = null;
var search_field19169__1 = (function (name__10710__auto__){return search_field19169.call(null,name__10710__auto__,null);
});
var search_field19169__2 = (function (name__10710__auto__,value__10711__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10710__auto__,value__10711__auto__);
});
search_field19169 = function(name__10710__auto__,value__10711__auto__){
switch(arguments.length){
case 1:
return search_field19169__1.call(this,name__10710__auto__);
case 2:
return search_field19169__2.call(this,name__10710__auto__,value__10711__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field19169.cljs$core$IFn$_invoke$arity$1 = search_field19169__1;
search_field19169.cljs$core$IFn$_invoke$arity$2 = search_field19169__2;
return search_field19169;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field19169);
/**
* Creates a tel input field.
*/
sablono.core.tel_field19170 = (function() {
var tel_field19170 = null;
var tel_field19170__1 = (function (name__10710__auto__){return tel_field19170.call(null,name__10710__auto__,null);
});
var tel_field19170__2 = (function (name__10710__auto__,value__10711__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10710__auto__,value__10711__auto__);
});
tel_field19170 = function(name__10710__auto__,value__10711__auto__){
switch(arguments.length){
case 1:
return tel_field19170__1.call(this,name__10710__auto__);
case 2:
return tel_field19170__2.call(this,name__10710__auto__,value__10711__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field19170.cljs$core$IFn$_invoke$arity$1 = tel_field19170__1;
tel_field19170.cljs$core$IFn$_invoke$arity$2 = tel_field19170__2;
return tel_field19170;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field19170);
/**
* Creates a text input field.
*/
sablono.core.text_field19171 = (function() {
var text_field19171 = null;
var text_field19171__1 = (function (name__10710__auto__){return text_field19171.call(null,name__10710__auto__,null);
});
var text_field19171__2 = (function (name__10710__auto__,value__10711__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10710__auto__,value__10711__auto__);
});
text_field19171 = function(name__10710__auto__,value__10711__auto__){
switch(arguments.length){
case 1:
return text_field19171__1.call(this,name__10710__auto__);
case 2:
return text_field19171__2.call(this,name__10710__auto__,value__10711__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field19171.cljs$core$IFn$_invoke$arity$1 = text_field19171__1;
text_field19171.cljs$core$IFn$_invoke$arity$2 = text_field19171__2;
return text_field19171;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field19171);
/**
* Creates a time input field.
*/
sablono.core.time_field19172 = (function() {
var time_field19172 = null;
var time_field19172__1 = (function (name__10710__auto__){return time_field19172.call(null,name__10710__auto__,null);
});
var time_field19172__2 = (function (name__10710__auto__,value__10711__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10710__auto__,value__10711__auto__);
});
time_field19172 = function(name__10710__auto__,value__10711__auto__){
switch(arguments.length){
case 1:
return time_field19172__1.call(this,name__10710__auto__);
case 2:
return time_field19172__2.call(this,name__10710__auto__,value__10711__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field19172.cljs$core$IFn$_invoke$arity$1 = time_field19172__1;
time_field19172.cljs$core$IFn$_invoke$arity$2 = time_field19172__2;
return time_field19172;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field19172);
/**
* Creates a url input field.
*/
sablono.core.url_field19173 = (function() {
var url_field19173 = null;
var url_field19173__1 = (function (name__10710__auto__){return url_field19173.call(null,name__10710__auto__,null);
});
var url_field19173__2 = (function (name__10710__auto__,value__10711__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10710__auto__,value__10711__auto__);
});
url_field19173 = function(name__10710__auto__,value__10711__auto__){
switch(arguments.length){
case 1:
return url_field19173__1.call(this,name__10710__auto__);
case 2:
return url_field19173__2.call(this,name__10710__auto__,value__10711__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field19173.cljs$core$IFn$_invoke$arity$1 = url_field19173__1;
url_field19173.cljs$core$IFn$_invoke$arity$2 = url_field19173__2;
return url_field19173;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field19173);
/**
* Creates a week input field.
*/
sablono.core.week_field19174 = (function() {
var week_field19174 = null;
var week_field19174__1 = (function (name__10710__auto__){return week_field19174.call(null,name__10710__auto__,null);
});
var week_field19174__2 = (function (name__10710__auto__,value__10711__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10710__auto__,value__10711__auto__);
});
week_field19174 = function(name__10710__auto__,value__10711__auto__){
switch(arguments.length){
case 1:
return week_field19174__1.call(this,name__10710__auto__);
case 2:
return week_field19174__2.call(this,name__10710__auto__,value__10711__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field19174.cljs$core$IFn$_invoke$arity$1 = week_field19174__1;
week_field19174.cljs$core$IFn$_invoke$arity$2 = week_field19174__2;
return week_field19174;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field19174);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box19175 = (function() {
var check_box19175 = null;
var check_box19175__1 = (function (name){return check_box19175.call(null,name,null);
});
var check_box19175__2 = (function (name,checked_QMARK_){return check_box19175.call(null,name,checked_QMARK_,"true");
});
var check_box19175__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box19175 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box19175__1.call(this,name);
case 2:
return check_box19175__2.call(this,name,checked_QMARK_);
case 3:
return check_box19175__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box19175.cljs$core$IFn$_invoke$arity$1 = check_box19175__1;
check_box19175.cljs$core$IFn$_invoke$arity$2 = check_box19175__2;
check_box19175.cljs$core$IFn$_invoke$arity$3 = check_box19175__3;
return check_box19175;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box19175);
/**
* Creates a radio button.
*/
sablono.core.radio_button19176 = (function() {
var radio_button19176 = null;
var radio_button19176__1 = (function (group){return radio_button19176.call(null,group,null);
});
var radio_button19176__2 = (function (group,checked_QMARK_){return radio_button19176.call(null,group,checked_QMARK_,"true");
});
var radio_button19176__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button19176 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button19176__1.call(this,group);
case 2:
return radio_button19176__2.call(this,group,checked_QMARK_);
case 3:
return radio_button19176__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button19176.cljs$core$IFn$_invoke$arity$1 = radio_button19176__1;
radio_button19176.cljs$core$IFn$_invoke$arity$2 = radio_button19176__2;
radio_button19176.cljs$core$IFn$_invoke$arity$3 = radio_button19176__3;
return radio_button19176;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button19176);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options19177 = (function() {
var select_options19177 = null;
var select_options19177__1 = (function (coll){return select_options19177.call(null,coll,null);
});
var select_options19177__2 = (function (coll,selected){var iter__4377__auto__ = (function iter__19186(s__19187){return (new cljs.core.LazySeq(null,(function (){var s__19187__$1 = s__19187;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19187__$1);if(temp__4126__auto__)
{var s__19187__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19187__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19187__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19189 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19188 = (0);while(true){
if((i__19188 < size__4376__auto__))
{var x = cljs.core._nth.call(null,c__4375__auto__,i__19188);cljs.core.chunk_append.call(null,b__19189,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__19192 = x;var text = cljs.core.nth.call(null,vec__19192,(0),null);var val = cljs.core.nth.call(null,vec__19192,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__19192,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options19177.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__19194 = (i__19188 + (1));
i__19188 = G__19194;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19189),iter__19186.call(null,cljs.core.chunk_rest.call(null,s__19187__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19189),null);
}
} else
{var x = cljs.core.first.call(null,s__19187__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__19193 = x;var text = cljs.core.nth.call(null,vec__19193,(0),null);var val = cljs.core.nth.call(null,vec__19193,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__19193,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options19177.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__19186.call(null,cljs.core.rest.call(null,s__19187__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,coll);
});
select_options19177 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options19177__1.call(this,coll);
case 2:
return select_options19177__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options19177.cljs$core$IFn$_invoke$arity$1 = select_options19177__1;
select_options19177.cljs$core$IFn$_invoke$arity$2 = select_options19177__2;
return select_options19177;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options19177);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down19195 = (function() {
var drop_down19195 = null;
var drop_down19195__2 = (function (name,options){return drop_down19195.call(null,name,options,null);
});
var drop_down19195__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down19195 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down19195__2.call(this,name,options);
case 3:
return drop_down19195__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down19195.cljs$core$IFn$_invoke$arity$2 = drop_down19195__2;
drop_down19195.cljs$core$IFn$_invoke$arity$3 = drop_down19195__3;
return drop_down19195;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down19195);
/**
* Creates a text area element.
*/
sablono.core.text_area19196 = (function() {
var text_area19196 = null;
var text_area19196__1 = (function (name){return text_area19196.call(null,name,null);
});
var text_area19196__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area19196 = function(name,value){
switch(arguments.length){
case 1:
return text_area19196__1.call(this,name);
case 2:
return text_area19196__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area19196.cljs$core$IFn$_invoke$arity$1 = text_area19196__1;
text_area19196.cljs$core$IFn$_invoke$arity$2 = text_area19196__2;
return text_area19196;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area19196);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label19197 = (function label19197(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label19197);
/**
* Creates a submit button.
*/
sablono.core.submit_button19198 = (function submit_button19198(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button19198);
/**
* Creates a form reset button.
*/
sablono.core.reset_button19199 = (function reset_button19199(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button19199);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to19200 = (function() { 
var form_to19200__delegate = function (p__19201,body){var vec__19203 = p__19201;var method = cljs.core.nth.call(null,vec__19203,(0),null);var action = cljs.core.nth.call(null,vec__19203,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to19200 = function (p__19201,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to19200__delegate.call(this,p__19201,body);};
form_to19200.cljs$lang$maxFixedArity = 1;
form_to19200.cljs$lang$applyTo = (function (arglist__19204){
var p__19201 = cljs.core.first(arglist__19204);
var body = cljs.core.rest(arglist__19204);
return form_to19200__delegate(p__19201,body);
});
form_to19200.cljs$core$IFn$_invoke$arity$variadic = form_to19200__delegate;
return form_to19200;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to19200);
