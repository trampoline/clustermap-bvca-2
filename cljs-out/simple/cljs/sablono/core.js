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
var G__30094__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__30093 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__30093,(0),null);var body = cljs.core.nthnext.call(null,vec__30093,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__30094 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__30094__delegate.call(this,args);};
G__30094.cljs$lang$maxFixedArity = 0;
G__30094.cljs$lang$applyTo = (function (arglist__30095){
var args = cljs.core.seq(arglist__30095);
return G__30094__delegate(args);
});
G__30094.cljs$core$IFn$_invoke$arity$variadic = G__30094__delegate;
return G__30094;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__30100(s__30101){return (new cljs.core.LazySeq(null,(function (){var s__30101__$1 = s__30101;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30101__$1);if(temp__4126__auto__)
{var s__30101__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30101__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__30101__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__30103 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__30102 = (0);while(true){
if((i__30102 < size__4267__auto__))
{var args = cljs.core._nth.call(null,c__4266__auto__,i__30102);cljs.core.chunk_append.call(null,b__30103,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__30104 = (i__30102 + (1));
i__30102 = G__30104;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30103),iter__30100.call(null,cljs.core.chunk_rest.call(null,s__30101__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30103),null);
}
} else
{var args = cljs.core.first.call(null,s__30101__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__30100.call(null,cljs.core.rest.call(null,s__30101__$2)));
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
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__30109(s__30110){return (new cljs.core.LazySeq(null,(function (){var s__30110__$1 = s__30110;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30110__$1);if(temp__4126__auto__)
{var s__30110__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30110__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__30110__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__30112 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__30111 = (0);while(true){
if((i__30111 < size__4267__auto__))
{var style = cljs.core._nth.call(null,c__4266__auto__,i__30111);cljs.core.chunk_append.call(null,b__30112,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__30113 = (i__30111 + (1));
i__30111 = G__30113;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30112),iter__30109.call(null,cljs.core.chunk_rest.call(null,s__30110__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30112),null);
}
} else
{var style = cljs.core.first.call(null,s__30110__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__30109.call(null,cljs.core.rest.call(null,s__30110__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__30114){
var styles = cljs.core.seq(arglist__30114);
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
sablono.core.link_to30115 = (function() { 
var link_to30115__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to30115 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to30115__delegate.call(this,url,content);};
link_to30115.cljs$lang$maxFixedArity = 1;
link_to30115.cljs$lang$applyTo = (function (arglist__30116){
var url = cljs.core.first(arglist__30116);
var content = cljs.core.rest(arglist__30116);
return link_to30115__delegate(url,content);
});
link_to30115.cljs$core$IFn$_invoke$arity$variadic = link_to30115__delegate;
return link_to30115;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to30115);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to30117 = (function() { 
var mail_to30117__delegate = function (e_mail,p__30118){var vec__30120 = p__30118;var content = cljs.core.nth.call(null,vec__30120,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to30117 = function (e_mail,var_args){
var p__30118 = null;if (arguments.length > 1) {
  p__30118 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to30117__delegate.call(this,e_mail,p__30118);};
mail_to30117.cljs$lang$maxFixedArity = 1;
mail_to30117.cljs$lang$applyTo = (function (arglist__30121){
var e_mail = cljs.core.first(arglist__30121);
var p__30118 = cljs.core.rest(arglist__30121);
return mail_to30117__delegate(e_mail,p__30118);
});
mail_to30117.cljs$core$IFn$_invoke$arity$variadic = mail_to30117__delegate;
return mail_to30117;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to30117);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list30122 = (function unordered_list30122(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4268__auto__ = (function iter__30127(s__30128){return (new cljs.core.LazySeq(null,(function (){var s__30128__$1 = s__30128;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30128__$1);if(temp__4126__auto__)
{var s__30128__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30128__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__30128__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__30130 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__30129 = (0);while(true){
if((i__30129 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__30129);cljs.core.chunk_append.call(null,b__30130,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__30131 = (i__30129 + (1));
i__30129 = G__30131;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30130),iter__30127.call(null,cljs.core.chunk_rest.call(null,s__30128__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30130),null);
}
} else
{var x = cljs.core.first.call(null,s__30128__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__30127.call(null,cljs.core.rest.call(null,s__30128__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list30122);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list30132 = (function ordered_list30132(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4268__auto__ = (function iter__30137(s__30138){return (new cljs.core.LazySeq(null,(function (){var s__30138__$1 = s__30138;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30138__$1);if(temp__4126__auto__)
{var s__30138__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30138__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__30138__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__30140 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__30139 = (0);while(true){
if((i__30139 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__30139);cljs.core.chunk_append.call(null,b__30140,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__30141 = (i__30139 + (1));
i__30139 = G__30141;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30140),iter__30137.call(null,cljs.core.chunk_rest.call(null,s__30138__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30140),null);
}
} else
{var x = cljs.core.first.call(null,s__30138__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__30137.call(null,cljs.core.rest.call(null,s__30138__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list30132);
/**
* Create an image element.
*/
sablono.core.image30142 = (function() {
var image30142 = null;
var image30142__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image30142__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image30142 = function(src,alt){
switch(arguments.length){
case 1:
return image30142__1.call(this,src);
case 2:
return image30142__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image30142.cljs$core$IFn$_invoke$arity$1 = image30142__1;
image30142.cljs$core$IFn$_invoke$arity$2 = image30142__2;
return image30142;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image30142);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__30143_SHARP_,p2__30144_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30143_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__30144_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__30145_SHARP_,p2__30146_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30145_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__30146_SHARP_));
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
sablono.core.color_field30147 = (function() {
var color_field30147 = null;
var color_field30147__1 = (function (name__10211__auto__){return color_field30147.call(null,name__10211__auto__,null);
});
var color_field30147__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10211__auto__,value__10212__auto__);
});
color_field30147 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return color_field30147__1.call(this,name__10211__auto__);
case 2:
return color_field30147__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field30147.cljs$core$IFn$_invoke$arity$1 = color_field30147__1;
color_field30147.cljs$core$IFn$_invoke$arity$2 = color_field30147__2;
return color_field30147;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field30147);
/**
* Creates a date input field.
*/
sablono.core.date_field30148 = (function() {
var date_field30148 = null;
var date_field30148__1 = (function (name__10211__auto__){return date_field30148.call(null,name__10211__auto__,null);
});
var date_field30148__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10211__auto__,value__10212__auto__);
});
date_field30148 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return date_field30148__1.call(this,name__10211__auto__);
case 2:
return date_field30148__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field30148.cljs$core$IFn$_invoke$arity$1 = date_field30148__1;
date_field30148.cljs$core$IFn$_invoke$arity$2 = date_field30148__2;
return date_field30148;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field30148);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field30149 = (function() {
var datetime_field30149 = null;
var datetime_field30149__1 = (function (name__10211__auto__){return datetime_field30149.call(null,name__10211__auto__,null);
});
var datetime_field30149__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10211__auto__,value__10212__auto__);
});
datetime_field30149 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return datetime_field30149__1.call(this,name__10211__auto__);
case 2:
return datetime_field30149__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field30149.cljs$core$IFn$_invoke$arity$1 = datetime_field30149__1;
datetime_field30149.cljs$core$IFn$_invoke$arity$2 = datetime_field30149__2;
return datetime_field30149;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field30149);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field30150 = (function() {
var datetime_local_field30150 = null;
var datetime_local_field30150__1 = (function (name__10211__auto__){return datetime_local_field30150.call(null,name__10211__auto__,null);
});
var datetime_local_field30150__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10211__auto__,value__10212__auto__);
});
datetime_local_field30150 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return datetime_local_field30150__1.call(this,name__10211__auto__);
case 2:
return datetime_local_field30150__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field30150.cljs$core$IFn$_invoke$arity$1 = datetime_local_field30150__1;
datetime_local_field30150.cljs$core$IFn$_invoke$arity$2 = datetime_local_field30150__2;
return datetime_local_field30150;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field30150);
/**
* Creates a email input field.
*/
sablono.core.email_field30151 = (function() {
var email_field30151 = null;
var email_field30151__1 = (function (name__10211__auto__){return email_field30151.call(null,name__10211__auto__,null);
});
var email_field30151__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10211__auto__,value__10212__auto__);
});
email_field30151 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return email_field30151__1.call(this,name__10211__auto__);
case 2:
return email_field30151__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field30151.cljs$core$IFn$_invoke$arity$1 = email_field30151__1;
email_field30151.cljs$core$IFn$_invoke$arity$2 = email_field30151__2;
return email_field30151;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field30151);
/**
* Creates a file input field.
*/
sablono.core.file_field30152 = (function() {
var file_field30152 = null;
var file_field30152__1 = (function (name__10211__auto__){return file_field30152.call(null,name__10211__auto__,null);
});
var file_field30152__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10211__auto__,value__10212__auto__);
});
file_field30152 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return file_field30152__1.call(this,name__10211__auto__);
case 2:
return file_field30152__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field30152.cljs$core$IFn$_invoke$arity$1 = file_field30152__1;
file_field30152.cljs$core$IFn$_invoke$arity$2 = file_field30152__2;
return file_field30152;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field30152);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field30153 = (function() {
var hidden_field30153 = null;
var hidden_field30153__1 = (function (name__10211__auto__){return hidden_field30153.call(null,name__10211__auto__,null);
});
var hidden_field30153__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10211__auto__,value__10212__auto__);
});
hidden_field30153 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return hidden_field30153__1.call(this,name__10211__auto__);
case 2:
return hidden_field30153__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field30153.cljs$core$IFn$_invoke$arity$1 = hidden_field30153__1;
hidden_field30153.cljs$core$IFn$_invoke$arity$2 = hidden_field30153__2;
return hidden_field30153;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field30153);
/**
* Creates a month input field.
*/
sablono.core.month_field30154 = (function() {
var month_field30154 = null;
var month_field30154__1 = (function (name__10211__auto__){return month_field30154.call(null,name__10211__auto__,null);
});
var month_field30154__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10211__auto__,value__10212__auto__);
});
month_field30154 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return month_field30154__1.call(this,name__10211__auto__);
case 2:
return month_field30154__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field30154.cljs$core$IFn$_invoke$arity$1 = month_field30154__1;
month_field30154.cljs$core$IFn$_invoke$arity$2 = month_field30154__2;
return month_field30154;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field30154);
/**
* Creates a number input field.
*/
sablono.core.number_field30155 = (function() {
var number_field30155 = null;
var number_field30155__1 = (function (name__10211__auto__){return number_field30155.call(null,name__10211__auto__,null);
});
var number_field30155__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10211__auto__,value__10212__auto__);
});
number_field30155 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return number_field30155__1.call(this,name__10211__auto__);
case 2:
return number_field30155__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field30155.cljs$core$IFn$_invoke$arity$1 = number_field30155__1;
number_field30155.cljs$core$IFn$_invoke$arity$2 = number_field30155__2;
return number_field30155;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field30155);
/**
* Creates a password input field.
*/
sablono.core.password_field30156 = (function() {
var password_field30156 = null;
var password_field30156__1 = (function (name__10211__auto__){return password_field30156.call(null,name__10211__auto__,null);
});
var password_field30156__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10211__auto__,value__10212__auto__);
});
password_field30156 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return password_field30156__1.call(this,name__10211__auto__);
case 2:
return password_field30156__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field30156.cljs$core$IFn$_invoke$arity$1 = password_field30156__1;
password_field30156.cljs$core$IFn$_invoke$arity$2 = password_field30156__2;
return password_field30156;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field30156);
/**
* Creates a range input field.
*/
sablono.core.range_field30157 = (function() {
var range_field30157 = null;
var range_field30157__1 = (function (name__10211__auto__){return range_field30157.call(null,name__10211__auto__,null);
});
var range_field30157__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10211__auto__,value__10212__auto__);
});
range_field30157 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return range_field30157__1.call(this,name__10211__auto__);
case 2:
return range_field30157__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field30157.cljs$core$IFn$_invoke$arity$1 = range_field30157__1;
range_field30157.cljs$core$IFn$_invoke$arity$2 = range_field30157__2;
return range_field30157;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field30157);
/**
* Creates a search input field.
*/
sablono.core.search_field30158 = (function() {
var search_field30158 = null;
var search_field30158__1 = (function (name__10211__auto__){return search_field30158.call(null,name__10211__auto__,null);
});
var search_field30158__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10211__auto__,value__10212__auto__);
});
search_field30158 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return search_field30158__1.call(this,name__10211__auto__);
case 2:
return search_field30158__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field30158.cljs$core$IFn$_invoke$arity$1 = search_field30158__1;
search_field30158.cljs$core$IFn$_invoke$arity$2 = search_field30158__2;
return search_field30158;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field30158);
/**
* Creates a tel input field.
*/
sablono.core.tel_field30159 = (function() {
var tel_field30159 = null;
var tel_field30159__1 = (function (name__10211__auto__){return tel_field30159.call(null,name__10211__auto__,null);
});
var tel_field30159__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10211__auto__,value__10212__auto__);
});
tel_field30159 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return tel_field30159__1.call(this,name__10211__auto__);
case 2:
return tel_field30159__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field30159.cljs$core$IFn$_invoke$arity$1 = tel_field30159__1;
tel_field30159.cljs$core$IFn$_invoke$arity$2 = tel_field30159__2;
return tel_field30159;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field30159);
/**
* Creates a text input field.
*/
sablono.core.text_field30160 = (function() {
var text_field30160 = null;
var text_field30160__1 = (function (name__10211__auto__){return text_field30160.call(null,name__10211__auto__,null);
});
var text_field30160__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10211__auto__,value__10212__auto__);
});
text_field30160 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return text_field30160__1.call(this,name__10211__auto__);
case 2:
return text_field30160__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field30160.cljs$core$IFn$_invoke$arity$1 = text_field30160__1;
text_field30160.cljs$core$IFn$_invoke$arity$2 = text_field30160__2;
return text_field30160;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field30160);
/**
* Creates a time input field.
*/
sablono.core.time_field30161 = (function() {
var time_field30161 = null;
var time_field30161__1 = (function (name__10211__auto__){return time_field30161.call(null,name__10211__auto__,null);
});
var time_field30161__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10211__auto__,value__10212__auto__);
});
time_field30161 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return time_field30161__1.call(this,name__10211__auto__);
case 2:
return time_field30161__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field30161.cljs$core$IFn$_invoke$arity$1 = time_field30161__1;
time_field30161.cljs$core$IFn$_invoke$arity$2 = time_field30161__2;
return time_field30161;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field30161);
/**
* Creates a url input field.
*/
sablono.core.url_field30162 = (function() {
var url_field30162 = null;
var url_field30162__1 = (function (name__10211__auto__){return url_field30162.call(null,name__10211__auto__,null);
});
var url_field30162__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10211__auto__,value__10212__auto__);
});
url_field30162 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return url_field30162__1.call(this,name__10211__auto__);
case 2:
return url_field30162__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field30162.cljs$core$IFn$_invoke$arity$1 = url_field30162__1;
url_field30162.cljs$core$IFn$_invoke$arity$2 = url_field30162__2;
return url_field30162;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field30162);
/**
* Creates a week input field.
*/
sablono.core.week_field30163 = (function() {
var week_field30163 = null;
var week_field30163__1 = (function (name__10211__auto__){return week_field30163.call(null,name__10211__auto__,null);
});
var week_field30163__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10211__auto__,value__10212__auto__);
});
week_field30163 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return week_field30163__1.call(this,name__10211__auto__);
case 2:
return week_field30163__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field30163.cljs$core$IFn$_invoke$arity$1 = week_field30163__1;
week_field30163.cljs$core$IFn$_invoke$arity$2 = week_field30163__2;
return week_field30163;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field30163);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box30164 = (function() {
var check_box30164 = null;
var check_box30164__1 = (function (name){return check_box30164.call(null,name,null);
});
var check_box30164__2 = (function (name,checked_QMARK_){return check_box30164.call(null,name,checked_QMARK_,"true");
});
var check_box30164__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box30164 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box30164__1.call(this,name);
case 2:
return check_box30164__2.call(this,name,checked_QMARK_);
case 3:
return check_box30164__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box30164.cljs$core$IFn$_invoke$arity$1 = check_box30164__1;
check_box30164.cljs$core$IFn$_invoke$arity$2 = check_box30164__2;
check_box30164.cljs$core$IFn$_invoke$arity$3 = check_box30164__3;
return check_box30164;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box30164);
/**
* Creates a radio button.
*/
sablono.core.radio_button30165 = (function() {
var radio_button30165 = null;
var radio_button30165__1 = (function (group){return radio_button30165.call(null,group,null);
});
var radio_button30165__2 = (function (group,checked_QMARK_){return radio_button30165.call(null,group,checked_QMARK_,"true");
});
var radio_button30165__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button30165 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button30165__1.call(this,group);
case 2:
return radio_button30165__2.call(this,group,checked_QMARK_);
case 3:
return radio_button30165__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button30165.cljs$core$IFn$_invoke$arity$1 = radio_button30165__1;
radio_button30165.cljs$core$IFn$_invoke$arity$2 = radio_button30165__2;
radio_button30165.cljs$core$IFn$_invoke$arity$3 = radio_button30165__3;
return radio_button30165;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button30165);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options30166 = (function() {
var select_options30166 = null;
var select_options30166__1 = (function (coll){return select_options30166.call(null,coll,null);
});
var select_options30166__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__30175(s__30176){return (new cljs.core.LazySeq(null,(function (){var s__30176__$1 = s__30176;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30176__$1);if(temp__4126__auto__)
{var s__30176__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30176__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__30176__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__30178 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__30177 = (0);while(true){
if((i__30177 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__30177);cljs.core.chunk_append.call(null,b__30178,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__30181 = x;var text = cljs.core.nth.call(null,vec__30181,(0),null);var val = cljs.core.nth.call(null,vec__30181,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__30181,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options30166.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__30183 = (i__30177 + (1));
i__30177 = G__30183;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30178),iter__30175.call(null,cljs.core.chunk_rest.call(null,s__30176__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30178),null);
}
} else
{var x = cljs.core.first.call(null,s__30176__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__30182 = x;var text = cljs.core.nth.call(null,vec__30182,(0),null);var val = cljs.core.nth.call(null,vec__30182,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__30182,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options30166.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__30175.call(null,cljs.core.rest.call(null,s__30176__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
});
select_options30166 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options30166__1.call(this,coll);
case 2:
return select_options30166__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options30166.cljs$core$IFn$_invoke$arity$1 = select_options30166__1;
select_options30166.cljs$core$IFn$_invoke$arity$2 = select_options30166__2;
return select_options30166;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options30166);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down30184 = (function() {
var drop_down30184 = null;
var drop_down30184__2 = (function (name,options){return drop_down30184.call(null,name,options,null);
});
var drop_down30184__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down30184 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down30184__2.call(this,name,options);
case 3:
return drop_down30184__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down30184.cljs$core$IFn$_invoke$arity$2 = drop_down30184__2;
drop_down30184.cljs$core$IFn$_invoke$arity$3 = drop_down30184__3;
return drop_down30184;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down30184);
/**
* Creates a text area element.
*/
sablono.core.text_area30185 = (function() {
var text_area30185 = null;
var text_area30185__1 = (function (name){return text_area30185.call(null,name,null);
});
var text_area30185__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area30185 = function(name,value){
switch(arguments.length){
case 1:
return text_area30185__1.call(this,name);
case 2:
return text_area30185__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area30185.cljs$core$IFn$_invoke$arity$1 = text_area30185__1;
text_area30185.cljs$core$IFn$_invoke$arity$2 = text_area30185__2;
return text_area30185;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area30185);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label30186 = (function label30186(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label30186);
/**
* Creates a submit button.
*/
sablono.core.submit_button30187 = (function submit_button30187(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button30187);
/**
* Creates a form reset button.
*/
sablono.core.reset_button30188 = (function reset_button30188(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button30188);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to30189 = (function() { 
var form_to30189__delegate = function (p__30190,body){var vec__30192 = p__30190;var method = cljs.core.nth.call(null,vec__30192,(0),null);var action = cljs.core.nth.call(null,vec__30192,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to30189 = function (p__30190,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to30189__delegate.call(this,p__30190,body);};
form_to30189.cljs$lang$maxFixedArity = 1;
form_to30189.cljs$lang$applyTo = (function (arglist__30193){
var p__30190 = cljs.core.first(arglist__30193);
var body = cljs.core.rest(arglist__30193);
return form_to30189__delegate(p__30190,body);
});
form_to30189.cljs$core$IFn$_invoke$arity$variadic = form_to30189__delegate;
return form_to30189;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to30189);
