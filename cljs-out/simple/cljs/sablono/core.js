// Compiled by ClojureScript 0.0-2261
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
var G__28982__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__28981 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__28981,(0),null);var body = cljs.core.nthnext.call(null,vec__28981,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__28982 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__28982__delegate.call(this,args);};
G__28982.cljs$lang$maxFixedArity = 0;
G__28982.cljs$lang$applyTo = (function (arglist__28983){
var args = cljs.core.seq(arglist__28983);
return G__28982__delegate(args);
});
G__28982.cljs$core$IFn$_invoke$arity$variadic = G__28982__delegate;
return G__28982;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__28988(s__28989){return (new cljs.core.LazySeq(null,(function (){var s__28989__$1 = s__28989;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28989__$1);if(temp__4126__auto__)
{var s__28989__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28989__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__28989__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__28991 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__28990 = (0);while(true){
if((i__28990 < size__4267__auto__))
{var args = cljs.core._nth.call(null,c__4266__auto__,i__28990);cljs.core.chunk_append.call(null,b__28991,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__28992 = (i__28990 + (1));
i__28990 = G__28992;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28991),iter__28988.call(null,cljs.core.chunk_rest.call(null,s__28989__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28991),null);
}
} else
{var args = cljs.core.first.call(null,s__28989__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__28988.call(null,cljs.core.rest.call(null,s__28989__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,arglists);
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
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__28997(s__28998){return (new cljs.core.LazySeq(null,(function (){var s__28998__$1 = s__28998;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28998__$1);if(temp__4126__auto__)
{var s__28998__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28998__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__28998__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__29000 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__28999 = (0);while(true){
if((i__28999 < size__4267__auto__))
{var style = cljs.core._nth.call(null,c__4266__auto__,i__28999);cljs.core.chunk_append.call(null,b__29000,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__29001 = (i__28999 + (1));
i__28999 = G__29001;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29000),iter__28997.call(null,cljs.core.chunk_rest.call(null,s__28998__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29000),null);
}
} else
{var style = cljs.core.first.call(null,s__28998__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__28997.call(null,cljs.core.rest.call(null,s__28998__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__29002){
var styles = cljs.core.seq(arglist__29002);
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
sablono.core.link_to29003 = (function() { 
var link_to29003__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to29003 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to29003__delegate.call(this,url,content);};
link_to29003.cljs$lang$maxFixedArity = 1;
link_to29003.cljs$lang$applyTo = (function (arglist__29004){
var url = cljs.core.first(arglist__29004);
var content = cljs.core.rest(arglist__29004);
return link_to29003__delegate(url,content);
});
link_to29003.cljs$core$IFn$_invoke$arity$variadic = link_to29003__delegate;
return link_to29003;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to29003);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to29005 = (function() { 
var mail_to29005__delegate = function (e_mail,p__29006){var vec__29008 = p__29006;var content = cljs.core.nth.call(null,vec__29008,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to29005 = function (e_mail,var_args){
var p__29006 = null;if (arguments.length > 1) {
  p__29006 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to29005__delegate.call(this,e_mail,p__29006);};
mail_to29005.cljs$lang$maxFixedArity = 1;
mail_to29005.cljs$lang$applyTo = (function (arglist__29009){
var e_mail = cljs.core.first(arglist__29009);
var p__29006 = cljs.core.rest(arglist__29009);
return mail_to29005__delegate(e_mail,p__29006);
});
mail_to29005.cljs$core$IFn$_invoke$arity$variadic = mail_to29005__delegate;
return mail_to29005;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to29005);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list29010 = (function unordered_list29010(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4268__auto__ = (function iter__29015(s__29016){return (new cljs.core.LazySeq(null,(function (){var s__29016__$1 = s__29016;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29016__$1);if(temp__4126__auto__)
{var s__29016__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29016__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__29016__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__29018 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__29017 = (0);while(true){
if((i__29017 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__29017);cljs.core.chunk_append.call(null,b__29018,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__29019 = (i__29017 + (1));
i__29017 = G__29019;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29018),iter__29015.call(null,cljs.core.chunk_rest.call(null,s__29016__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29018),null);
}
} else
{var x = cljs.core.first.call(null,s__29016__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__29015.call(null,cljs.core.rest.call(null,s__29016__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list29010);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list29020 = (function ordered_list29020(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4268__auto__ = (function iter__29025(s__29026){return (new cljs.core.LazySeq(null,(function (){var s__29026__$1 = s__29026;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29026__$1);if(temp__4126__auto__)
{var s__29026__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29026__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__29026__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__29028 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__29027 = (0);while(true){
if((i__29027 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__29027);cljs.core.chunk_append.call(null,b__29028,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__29029 = (i__29027 + (1));
i__29027 = G__29029;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29028),iter__29025.call(null,cljs.core.chunk_rest.call(null,s__29026__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29028),null);
}
} else
{var x = cljs.core.first.call(null,s__29026__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__29025.call(null,cljs.core.rest.call(null,s__29026__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list29020);
/**
* Create an image element.
*/
sablono.core.image29030 = (function() {
var image29030 = null;
var image29030__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image29030__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image29030 = function(src,alt){
switch(arguments.length){
case 1:
return image29030__1.call(this,src);
case 2:
return image29030__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image29030.cljs$core$IFn$_invoke$arity$1 = image29030__1;
image29030.cljs$core$IFn$_invoke$arity$2 = image29030__2;
return image29030;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image29030);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__29031_SHARP_,p2__29032_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29031_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__29032_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__29033_SHARP_,p2__29034_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29033_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__29034_SHARP_));
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
sablono.core.color_field29035 = (function() {
var color_field29035 = null;
var color_field29035__1 = (function (name__10195__auto__){return color_field29035.call(null,name__10195__auto__,null);
});
var color_field29035__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10195__auto__,value__10196__auto__);
});
color_field29035 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return color_field29035__1.call(this,name__10195__auto__);
case 2:
return color_field29035__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field29035.cljs$core$IFn$_invoke$arity$1 = color_field29035__1;
color_field29035.cljs$core$IFn$_invoke$arity$2 = color_field29035__2;
return color_field29035;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field29035);
/**
* Creates a date input field.
*/
sablono.core.date_field29036 = (function() {
var date_field29036 = null;
var date_field29036__1 = (function (name__10195__auto__){return date_field29036.call(null,name__10195__auto__,null);
});
var date_field29036__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10195__auto__,value__10196__auto__);
});
date_field29036 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return date_field29036__1.call(this,name__10195__auto__);
case 2:
return date_field29036__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field29036.cljs$core$IFn$_invoke$arity$1 = date_field29036__1;
date_field29036.cljs$core$IFn$_invoke$arity$2 = date_field29036__2;
return date_field29036;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field29036);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field29037 = (function() {
var datetime_field29037 = null;
var datetime_field29037__1 = (function (name__10195__auto__){return datetime_field29037.call(null,name__10195__auto__,null);
});
var datetime_field29037__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10195__auto__,value__10196__auto__);
});
datetime_field29037 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return datetime_field29037__1.call(this,name__10195__auto__);
case 2:
return datetime_field29037__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field29037.cljs$core$IFn$_invoke$arity$1 = datetime_field29037__1;
datetime_field29037.cljs$core$IFn$_invoke$arity$2 = datetime_field29037__2;
return datetime_field29037;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field29037);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field29038 = (function() {
var datetime_local_field29038 = null;
var datetime_local_field29038__1 = (function (name__10195__auto__){return datetime_local_field29038.call(null,name__10195__auto__,null);
});
var datetime_local_field29038__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10195__auto__,value__10196__auto__);
});
datetime_local_field29038 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return datetime_local_field29038__1.call(this,name__10195__auto__);
case 2:
return datetime_local_field29038__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field29038.cljs$core$IFn$_invoke$arity$1 = datetime_local_field29038__1;
datetime_local_field29038.cljs$core$IFn$_invoke$arity$2 = datetime_local_field29038__2;
return datetime_local_field29038;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field29038);
/**
* Creates a email input field.
*/
sablono.core.email_field29039 = (function() {
var email_field29039 = null;
var email_field29039__1 = (function (name__10195__auto__){return email_field29039.call(null,name__10195__auto__,null);
});
var email_field29039__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10195__auto__,value__10196__auto__);
});
email_field29039 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return email_field29039__1.call(this,name__10195__auto__);
case 2:
return email_field29039__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field29039.cljs$core$IFn$_invoke$arity$1 = email_field29039__1;
email_field29039.cljs$core$IFn$_invoke$arity$2 = email_field29039__2;
return email_field29039;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field29039);
/**
* Creates a file input field.
*/
sablono.core.file_field29040 = (function() {
var file_field29040 = null;
var file_field29040__1 = (function (name__10195__auto__){return file_field29040.call(null,name__10195__auto__,null);
});
var file_field29040__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10195__auto__,value__10196__auto__);
});
file_field29040 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return file_field29040__1.call(this,name__10195__auto__);
case 2:
return file_field29040__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field29040.cljs$core$IFn$_invoke$arity$1 = file_field29040__1;
file_field29040.cljs$core$IFn$_invoke$arity$2 = file_field29040__2;
return file_field29040;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field29040);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field29041 = (function() {
var hidden_field29041 = null;
var hidden_field29041__1 = (function (name__10195__auto__){return hidden_field29041.call(null,name__10195__auto__,null);
});
var hidden_field29041__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10195__auto__,value__10196__auto__);
});
hidden_field29041 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return hidden_field29041__1.call(this,name__10195__auto__);
case 2:
return hidden_field29041__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field29041.cljs$core$IFn$_invoke$arity$1 = hidden_field29041__1;
hidden_field29041.cljs$core$IFn$_invoke$arity$2 = hidden_field29041__2;
return hidden_field29041;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field29041);
/**
* Creates a month input field.
*/
sablono.core.month_field29042 = (function() {
var month_field29042 = null;
var month_field29042__1 = (function (name__10195__auto__){return month_field29042.call(null,name__10195__auto__,null);
});
var month_field29042__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10195__auto__,value__10196__auto__);
});
month_field29042 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return month_field29042__1.call(this,name__10195__auto__);
case 2:
return month_field29042__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field29042.cljs$core$IFn$_invoke$arity$1 = month_field29042__1;
month_field29042.cljs$core$IFn$_invoke$arity$2 = month_field29042__2;
return month_field29042;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field29042);
/**
* Creates a number input field.
*/
sablono.core.number_field29043 = (function() {
var number_field29043 = null;
var number_field29043__1 = (function (name__10195__auto__){return number_field29043.call(null,name__10195__auto__,null);
});
var number_field29043__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10195__auto__,value__10196__auto__);
});
number_field29043 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return number_field29043__1.call(this,name__10195__auto__);
case 2:
return number_field29043__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field29043.cljs$core$IFn$_invoke$arity$1 = number_field29043__1;
number_field29043.cljs$core$IFn$_invoke$arity$2 = number_field29043__2;
return number_field29043;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field29043);
/**
* Creates a password input field.
*/
sablono.core.password_field29044 = (function() {
var password_field29044 = null;
var password_field29044__1 = (function (name__10195__auto__){return password_field29044.call(null,name__10195__auto__,null);
});
var password_field29044__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10195__auto__,value__10196__auto__);
});
password_field29044 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return password_field29044__1.call(this,name__10195__auto__);
case 2:
return password_field29044__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field29044.cljs$core$IFn$_invoke$arity$1 = password_field29044__1;
password_field29044.cljs$core$IFn$_invoke$arity$2 = password_field29044__2;
return password_field29044;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field29044);
/**
* Creates a range input field.
*/
sablono.core.range_field29045 = (function() {
var range_field29045 = null;
var range_field29045__1 = (function (name__10195__auto__){return range_field29045.call(null,name__10195__auto__,null);
});
var range_field29045__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10195__auto__,value__10196__auto__);
});
range_field29045 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return range_field29045__1.call(this,name__10195__auto__);
case 2:
return range_field29045__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field29045.cljs$core$IFn$_invoke$arity$1 = range_field29045__1;
range_field29045.cljs$core$IFn$_invoke$arity$2 = range_field29045__2;
return range_field29045;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field29045);
/**
* Creates a search input field.
*/
sablono.core.search_field29046 = (function() {
var search_field29046 = null;
var search_field29046__1 = (function (name__10195__auto__){return search_field29046.call(null,name__10195__auto__,null);
});
var search_field29046__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10195__auto__,value__10196__auto__);
});
search_field29046 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return search_field29046__1.call(this,name__10195__auto__);
case 2:
return search_field29046__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field29046.cljs$core$IFn$_invoke$arity$1 = search_field29046__1;
search_field29046.cljs$core$IFn$_invoke$arity$2 = search_field29046__2;
return search_field29046;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field29046);
/**
* Creates a tel input field.
*/
sablono.core.tel_field29047 = (function() {
var tel_field29047 = null;
var tel_field29047__1 = (function (name__10195__auto__){return tel_field29047.call(null,name__10195__auto__,null);
});
var tel_field29047__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10195__auto__,value__10196__auto__);
});
tel_field29047 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return tel_field29047__1.call(this,name__10195__auto__);
case 2:
return tel_field29047__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field29047.cljs$core$IFn$_invoke$arity$1 = tel_field29047__1;
tel_field29047.cljs$core$IFn$_invoke$arity$2 = tel_field29047__2;
return tel_field29047;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field29047);
/**
* Creates a text input field.
*/
sablono.core.text_field29048 = (function() {
var text_field29048 = null;
var text_field29048__1 = (function (name__10195__auto__){return text_field29048.call(null,name__10195__auto__,null);
});
var text_field29048__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10195__auto__,value__10196__auto__);
});
text_field29048 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return text_field29048__1.call(this,name__10195__auto__);
case 2:
return text_field29048__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field29048.cljs$core$IFn$_invoke$arity$1 = text_field29048__1;
text_field29048.cljs$core$IFn$_invoke$arity$2 = text_field29048__2;
return text_field29048;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field29048);
/**
* Creates a time input field.
*/
sablono.core.time_field29049 = (function() {
var time_field29049 = null;
var time_field29049__1 = (function (name__10195__auto__){return time_field29049.call(null,name__10195__auto__,null);
});
var time_field29049__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10195__auto__,value__10196__auto__);
});
time_field29049 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return time_field29049__1.call(this,name__10195__auto__);
case 2:
return time_field29049__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field29049.cljs$core$IFn$_invoke$arity$1 = time_field29049__1;
time_field29049.cljs$core$IFn$_invoke$arity$2 = time_field29049__2;
return time_field29049;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field29049);
/**
* Creates a url input field.
*/
sablono.core.url_field29050 = (function() {
var url_field29050 = null;
var url_field29050__1 = (function (name__10195__auto__){return url_field29050.call(null,name__10195__auto__,null);
});
var url_field29050__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10195__auto__,value__10196__auto__);
});
url_field29050 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return url_field29050__1.call(this,name__10195__auto__);
case 2:
return url_field29050__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field29050.cljs$core$IFn$_invoke$arity$1 = url_field29050__1;
url_field29050.cljs$core$IFn$_invoke$arity$2 = url_field29050__2;
return url_field29050;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field29050);
/**
* Creates a week input field.
*/
sablono.core.week_field29051 = (function() {
var week_field29051 = null;
var week_field29051__1 = (function (name__10195__auto__){return week_field29051.call(null,name__10195__auto__,null);
});
var week_field29051__2 = (function (name__10195__auto__,value__10196__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10195__auto__,value__10196__auto__);
});
week_field29051 = function(name__10195__auto__,value__10196__auto__){
switch(arguments.length){
case 1:
return week_field29051__1.call(this,name__10195__auto__);
case 2:
return week_field29051__2.call(this,name__10195__auto__,value__10196__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field29051.cljs$core$IFn$_invoke$arity$1 = week_field29051__1;
week_field29051.cljs$core$IFn$_invoke$arity$2 = week_field29051__2;
return week_field29051;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field29051);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box29052 = (function() {
var check_box29052 = null;
var check_box29052__1 = (function (name){return check_box29052.call(null,name,null);
});
var check_box29052__2 = (function (name,checked_QMARK_){return check_box29052.call(null,name,checked_QMARK_,"true");
});
var check_box29052__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box29052 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box29052__1.call(this,name);
case 2:
return check_box29052__2.call(this,name,checked_QMARK_);
case 3:
return check_box29052__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box29052.cljs$core$IFn$_invoke$arity$1 = check_box29052__1;
check_box29052.cljs$core$IFn$_invoke$arity$2 = check_box29052__2;
check_box29052.cljs$core$IFn$_invoke$arity$3 = check_box29052__3;
return check_box29052;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box29052);
/**
* Creates a radio button.
*/
sablono.core.radio_button29053 = (function() {
var radio_button29053 = null;
var radio_button29053__1 = (function (group){return radio_button29053.call(null,group,null);
});
var radio_button29053__2 = (function (group,checked_QMARK_){return radio_button29053.call(null,group,checked_QMARK_,"true");
});
var radio_button29053__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button29053 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button29053__1.call(this,group);
case 2:
return radio_button29053__2.call(this,group,checked_QMARK_);
case 3:
return radio_button29053__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button29053.cljs$core$IFn$_invoke$arity$1 = radio_button29053__1;
radio_button29053.cljs$core$IFn$_invoke$arity$2 = radio_button29053__2;
radio_button29053.cljs$core$IFn$_invoke$arity$3 = radio_button29053__3;
return radio_button29053;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button29053);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options29054 = (function() {
var select_options29054 = null;
var select_options29054__1 = (function (coll){return select_options29054.call(null,coll,null);
});
var select_options29054__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__29063(s__29064){return (new cljs.core.LazySeq(null,(function (){var s__29064__$1 = s__29064;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29064__$1);if(temp__4126__auto__)
{var s__29064__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29064__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__29064__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__29066 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__29065 = (0);while(true){
if((i__29065 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__29065);cljs.core.chunk_append.call(null,b__29066,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__29069 = x;var text = cljs.core.nth.call(null,vec__29069,(0),null);var val = cljs.core.nth.call(null,vec__29069,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__29069,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options29054.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__29071 = (i__29065 + (1));
i__29065 = G__29071;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29066),iter__29063.call(null,cljs.core.chunk_rest.call(null,s__29064__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29066),null);
}
} else
{var x = cljs.core.first.call(null,s__29064__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__29070 = x;var text = cljs.core.nth.call(null,vec__29070,(0),null);var val = cljs.core.nth.call(null,vec__29070,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__29070,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options29054.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__29063.call(null,cljs.core.rest.call(null,s__29064__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
});
select_options29054 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options29054__1.call(this,coll);
case 2:
return select_options29054__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options29054.cljs$core$IFn$_invoke$arity$1 = select_options29054__1;
select_options29054.cljs$core$IFn$_invoke$arity$2 = select_options29054__2;
return select_options29054;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options29054);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down29072 = (function() {
var drop_down29072 = null;
var drop_down29072__2 = (function (name,options){return drop_down29072.call(null,name,options,null);
});
var drop_down29072__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down29072 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down29072__2.call(this,name,options);
case 3:
return drop_down29072__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down29072.cljs$core$IFn$_invoke$arity$2 = drop_down29072__2;
drop_down29072.cljs$core$IFn$_invoke$arity$3 = drop_down29072__3;
return drop_down29072;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down29072);
/**
* Creates a text area element.
*/
sablono.core.text_area29073 = (function() {
var text_area29073 = null;
var text_area29073__1 = (function (name){return text_area29073.call(null,name,null);
});
var text_area29073__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area29073 = function(name,value){
switch(arguments.length){
case 1:
return text_area29073__1.call(this,name);
case 2:
return text_area29073__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area29073.cljs$core$IFn$_invoke$arity$1 = text_area29073__1;
text_area29073.cljs$core$IFn$_invoke$arity$2 = text_area29073__2;
return text_area29073;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area29073);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label29074 = (function label29074(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label29074);
/**
* Creates a submit button.
*/
sablono.core.submit_button29075 = (function submit_button29075(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button29075);
/**
* Creates a form reset button.
*/
sablono.core.reset_button29076 = (function reset_button29076(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button29076);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to29077 = (function() { 
var form_to29077__delegate = function (p__29078,body){var vec__29080 = p__29078;var method = cljs.core.nth.call(null,vec__29080,(0),null);var action = cljs.core.nth.call(null,vec__29080,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to29077 = function (p__29078,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to29077__delegate.call(this,p__29078,body);};
form_to29077.cljs$lang$maxFixedArity = 1;
form_to29077.cljs$lang$applyTo = (function (arglist__29081){
var p__29078 = cljs.core.first(arglist__29081);
var body = cljs.core.rest(arglist__29081);
return form_to29077__delegate(p__29078,body);
});
form_to29077.cljs$core$IFn$_invoke$arity$variadic = form_to29077__delegate;
return form_to29077;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to29077);
