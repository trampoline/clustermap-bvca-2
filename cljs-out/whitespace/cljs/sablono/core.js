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
var G__23112__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__23111 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__23111,(0),null);var body = cljs.core.nthnext.call(null,vec__23111,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__23112 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23112__delegate.call(this,args);};
G__23112.cljs$lang$maxFixedArity = 0;
G__23112.cljs$lang$applyTo = (function (arglist__23113){
var args = cljs.core.seq(arglist__23113);
return G__23112__delegate(args);
});
G__23112.cljs$core$IFn$_invoke$arity$variadic = G__23112__delegate;
return G__23112;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4375__auto__ = (function iter__23118(s__23119){return (new cljs.core.LazySeq(null,(function (){var s__23119__$1 = s__23119;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23119__$1);if(temp__4126__auto__)
{var s__23119__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23119__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__23119__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__23121 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__23120 = (0);while(true){
if((i__23120 < size__4374__auto__))
{var args = cljs.core._nth.call(null,c__4373__auto__,i__23120);cljs.core.chunk_append.call(null,b__23121,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__23122 = (i__23120 + (1));
i__23120 = G__23122;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23121),iter__23118.call(null,cljs.core.chunk_rest.call(null,s__23119__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23121),null);
}
} else
{var args = cljs.core.first.call(null,s__23119__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__23118.call(null,cljs.core.rest.call(null,s__23119__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__.call(null,arglists);
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
var include_css__delegate = function (styles){var iter__4375__auto__ = (function iter__23127(s__23128){return (new cljs.core.LazySeq(null,(function (){var s__23128__$1 = s__23128;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23128__$1);if(temp__4126__auto__)
{var s__23128__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23128__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__23128__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__23130 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__23129 = (0);while(true){
if((i__23129 < size__4374__auto__))
{var style = cljs.core._nth.call(null,c__4373__auto__,i__23129);cljs.core.chunk_append.call(null,b__23130,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__23131 = (i__23129 + (1));
i__23129 = G__23131;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23130),iter__23127.call(null,cljs.core.chunk_rest.call(null,s__23128__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23130),null);
}
} else
{var style = cljs.core.first.call(null,s__23128__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__23127.call(null,cljs.core.rest.call(null,s__23128__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__23132){
var styles = cljs.core.seq(arglist__23132);
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
sablono.core.link_to23133 = (function() { 
var link_to23133__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to23133 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to23133__delegate.call(this,url,content);};
link_to23133.cljs$lang$maxFixedArity = 1;
link_to23133.cljs$lang$applyTo = (function (arglist__23134){
var url = cljs.core.first(arglist__23134);
var content = cljs.core.rest(arglist__23134);
return link_to23133__delegate(url,content);
});
link_to23133.cljs$core$IFn$_invoke$arity$variadic = link_to23133__delegate;
return link_to23133;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to23133);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to23135 = (function() { 
var mail_to23135__delegate = function (e_mail,p__23136){var vec__23138 = p__23136;var content = cljs.core.nth.call(null,vec__23138,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3637__auto__ = content;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to23135 = function (e_mail,var_args){
var p__23136 = null;if (arguments.length > 1) {
  p__23136 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to23135__delegate.call(this,e_mail,p__23136);};
mail_to23135.cljs$lang$maxFixedArity = 1;
mail_to23135.cljs$lang$applyTo = (function (arglist__23139){
var e_mail = cljs.core.first(arglist__23139);
var p__23136 = cljs.core.rest(arglist__23139);
return mail_to23135__delegate(e_mail,p__23136);
});
mail_to23135.cljs$core$IFn$_invoke$arity$variadic = mail_to23135__delegate;
return mail_to23135;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to23135);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list23140 = (function unordered_list23140(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4375__auto__ = (function iter__23145(s__23146){return (new cljs.core.LazySeq(null,(function (){var s__23146__$1 = s__23146;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23146__$1);if(temp__4126__auto__)
{var s__23146__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23146__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__23146__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__23148 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__23147 = (0);while(true){
if((i__23147 < size__4374__auto__))
{var x = cljs.core._nth.call(null,c__4373__auto__,i__23147);cljs.core.chunk_append.call(null,b__23148,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__23149 = (i__23147 + (1));
i__23147 = G__23149;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23148),iter__23145.call(null,cljs.core.chunk_rest.call(null,s__23146__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23148),null);
}
} else
{var x = cljs.core.first.call(null,s__23146__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__23145.call(null,cljs.core.rest.call(null,s__23146__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list23140);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list23150 = (function ordered_list23150(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4375__auto__ = (function iter__23155(s__23156){return (new cljs.core.LazySeq(null,(function (){var s__23156__$1 = s__23156;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23156__$1);if(temp__4126__auto__)
{var s__23156__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23156__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__23156__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__23158 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__23157 = (0);while(true){
if((i__23157 < size__4374__auto__))
{var x = cljs.core._nth.call(null,c__4373__auto__,i__23157);cljs.core.chunk_append.call(null,b__23158,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__23159 = (i__23157 + (1));
i__23157 = G__23159;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23158),iter__23155.call(null,cljs.core.chunk_rest.call(null,s__23156__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23158),null);
}
} else
{var x = cljs.core.first.call(null,s__23156__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__23155.call(null,cljs.core.rest.call(null,s__23156__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list23150);
/**
* Create an image element.
*/
sablono.core.image23160 = (function() {
var image23160 = null;
var image23160__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image23160__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image23160 = function(src,alt){
switch(arguments.length){
case 1:
return image23160__1.call(this,src);
case 2:
return image23160__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image23160.cljs$core$IFn$_invoke$arity$1 = image23160__1;
image23160.cljs$core$IFn$_invoke$arity$2 = image23160__2;
return image23160;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image23160);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__23161_SHARP_,p2__23162_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23161_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23162_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__23163_SHARP_,p2__23164_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23163_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23164_SHARP_));
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
sablono.core.color_field23165 = (function() {
var color_field23165 = null;
var color_field23165__1 = (function (name__11139__auto__){return color_field23165.call(null,name__11139__auto__,null);
});
var color_field23165__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__11139__auto__,value__11140__auto__);
});
color_field23165 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return color_field23165__1.call(this,name__11139__auto__);
case 2:
return color_field23165__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field23165.cljs$core$IFn$_invoke$arity$1 = color_field23165__1;
color_field23165.cljs$core$IFn$_invoke$arity$2 = color_field23165__2;
return color_field23165;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field23165);
/**
* Creates a date input field.
*/
sablono.core.date_field23166 = (function() {
var date_field23166 = null;
var date_field23166__1 = (function (name__11139__auto__){return date_field23166.call(null,name__11139__auto__,null);
});
var date_field23166__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__11139__auto__,value__11140__auto__);
});
date_field23166 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return date_field23166__1.call(this,name__11139__auto__);
case 2:
return date_field23166__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field23166.cljs$core$IFn$_invoke$arity$1 = date_field23166__1;
date_field23166.cljs$core$IFn$_invoke$arity$2 = date_field23166__2;
return date_field23166;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field23166);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field23167 = (function() {
var datetime_field23167 = null;
var datetime_field23167__1 = (function (name__11139__auto__){return datetime_field23167.call(null,name__11139__auto__,null);
});
var datetime_field23167__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__11139__auto__,value__11140__auto__);
});
datetime_field23167 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return datetime_field23167__1.call(this,name__11139__auto__);
case 2:
return datetime_field23167__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field23167.cljs$core$IFn$_invoke$arity$1 = datetime_field23167__1;
datetime_field23167.cljs$core$IFn$_invoke$arity$2 = datetime_field23167__2;
return datetime_field23167;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field23167);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field23168 = (function() {
var datetime_local_field23168 = null;
var datetime_local_field23168__1 = (function (name__11139__auto__){return datetime_local_field23168.call(null,name__11139__auto__,null);
});
var datetime_local_field23168__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__11139__auto__,value__11140__auto__);
});
datetime_local_field23168 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return datetime_local_field23168__1.call(this,name__11139__auto__);
case 2:
return datetime_local_field23168__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field23168.cljs$core$IFn$_invoke$arity$1 = datetime_local_field23168__1;
datetime_local_field23168.cljs$core$IFn$_invoke$arity$2 = datetime_local_field23168__2;
return datetime_local_field23168;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field23168);
/**
* Creates a email input field.
*/
sablono.core.email_field23169 = (function() {
var email_field23169 = null;
var email_field23169__1 = (function (name__11139__auto__){return email_field23169.call(null,name__11139__auto__,null);
});
var email_field23169__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__11139__auto__,value__11140__auto__);
});
email_field23169 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return email_field23169__1.call(this,name__11139__auto__);
case 2:
return email_field23169__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field23169.cljs$core$IFn$_invoke$arity$1 = email_field23169__1;
email_field23169.cljs$core$IFn$_invoke$arity$2 = email_field23169__2;
return email_field23169;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field23169);
/**
* Creates a file input field.
*/
sablono.core.file_field23170 = (function() {
var file_field23170 = null;
var file_field23170__1 = (function (name__11139__auto__){return file_field23170.call(null,name__11139__auto__,null);
});
var file_field23170__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__11139__auto__,value__11140__auto__);
});
file_field23170 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return file_field23170__1.call(this,name__11139__auto__);
case 2:
return file_field23170__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field23170.cljs$core$IFn$_invoke$arity$1 = file_field23170__1;
file_field23170.cljs$core$IFn$_invoke$arity$2 = file_field23170__2;
return file_field23170;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field23170);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field23171 = (function() {
var hidden_field23171 = null;
var hidden_field23171__1 = (function (name__11139__auto__){return hidden_field23171.call(null,name__11139__auto__,null);
});
var hidden_field23171__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__11139__auto__,value__11140__auto__);
});
hidden_field23171 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return hidden_field23171__1.call(this,name__11139__auto__);
case 2:
return hidden_field23171__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field23171.cljs$core$IFn$_invoke$arity$1 = hidden_field23171__1;
hidden_field23171.cljs$core$IFn$_invoke$arity$2 = hidden_field23171__2;
return hidden_field23171;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field23171);
/**
* Creates a month input field.
*/
sablono.core.month_field23172 = (function() {
var month_field23172 = null;
var month_field23172__1 = (function (name__11139__auto__){return month_field23172.call(null,name__11139__auto__,null);
});
var month_field23172__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__11139__auto__,value__11140__auto__);
});
month_field23172 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return month_field23172__1.call(this,name__11139__auto__);
case 2:
return month_field23172__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field23172.cljs$core$IFn$_invoke$arity$1 = month_field23172__1;
month_field23172.cljs$core$IFn$_invoke$arity$2 = month_field23172__2;
return month_field23172;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field23172);
/**
* Creates a number input field.
*/
sablono.core.number_field23173 = (function() {
var number_field23173 = null;
var number_field23173__1 = (function (name__11139__auto__){return number_field23173.call(null,name__11139__auto__,null);
});
var number_field23173__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__11139__auto__,value__11140__auto__);
});
number_field23173 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return number_field23173__1.call(this,name__11139__auto__);
case 2:
return number_field23173__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field23173.cljs$core$IFn$_invoke$arity$1 = number_field23173__1;
number_field23173.cljs$core$IFn$_invoke$arity$2 = number_field23173__2;
return number_field23173;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field23173);
/**
* Creates a password input field.
*/
sablono.core.password_field23174 = (function() {
var password_field23174 = null;
var password_field23174__1 = (function (name__11139__auto__){return password_field23174.call(null,name__11139__auto__,null);
});
var password_field23174__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__11139__auto__,value__11140__auto__);
});
password_field23174 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return password_field23174__1.call(this,name__11139__auto__);
case 2:
return password_field23174__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field23174.cljs$core$IFn$_invoke$arity$1 = password_field23174__1;
password_field23174.cljs$core$IFn$_invoke$arity$2 = password_field23174__2;
return password_field23174;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field23174);
/**
* Creates a range input field.
*/
sablono.core.range_field23175 = (function() {
var range_field23175 = null;
var range_field23175__1 = (function (name__11139__auto__){return range_field23175.call(null,name__11139__auto__,null);
});
var range_field23175__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__11139__auto__,value__11140__auto__);
});
range_field23175 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return range_field23175__1.call(this,name__11139__auto__);
case 2:
return range_field23175__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field23175.cljs$core$IFn$_invoke$arity$1 = range_field23175__1;
range_field23175.cljs$core$IFn$_invoke$arity$2 = range_field23175__2;
return range_field23175;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field23175);
/**
* Creates a search input field.
*/
sablono.core.search_field23176 = (function() {
var search_field23176 = null;
var search_field23176__1 = (function (name__11139__auto__){return search_field23176.call(null,name__11139__auto__,null);
});
var search_field23176__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__11139__auto__,value__11140__auto__);
});
search_field23176 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return search_field23176__1.call(this,name__11139__auto__);
case 2:
return search_field23176__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field23176.cljs$core$IFn$_invoke$arity$1 = search_field23176__1;
search_field23176.cljs$core$IFn$_invoke$arity$2 = search_field23176__2;
return search_field23176;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field23176);
/**
* Creates a tel input field.
*/
sablono.core.tel_field23177 = (function() {
var tel_field23177 = null;
var tel_field23177__1 = (function (name__11139__auto__){return tel_field23177.call(null,name__11139__auto__,null);
});
var tel_field23177__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__11139__auto__,value__11140__auto__);
});
tel_field23177 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return tel_field23177__1.call(this,name__11139__auto__);
case 2:
return tel_field23177__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field23177.cljs$core$IFn$_invoke$arity$1 = tel_field23177__1;
tel_field23177.cljs$core$IFn$_invoke$arity$2 = tel_field23177__2;
return tel_field23177;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field23177);
/**
* Creates a text input field.
*/
sablono.core.text_field23178 = (function() {
var text_field23178 = null;
var text_field23178__1 = (function (name__11139__auto__){return text_field23178.call(null,name__11139__auto__,null);
});
var text_field23178__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__11139__auto__,value__11140__auto__);
});
text_field23178 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return text_field23178__1.call(this,name__11139__auto__);
case 2:
return text_field23178__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field23178.cljs$core$IFn$_invoke$arity$1 = text_field23178__1;
text_field23178.cljs$core$IFn$_invoke$arity$2 = text_field23178__2;
return text_field23178;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field23178);
/**
* Creates a time input field.
*/
sablono.core.time_field23179 = (function() {
var time_field23179 = null;
var time_field23179__1 = (function (name__11139__auto__){return time_field23179.call(null,name__11139__auto__,null);
});
var time_field23179__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__11139__auto__,value__11140__auto__);
});
time_field23179 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return time_field23179__1.call(this,name__11139__auto__);
case 2:
return time_field23179__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field23179.cljs$core$IFn$_invoke$arity$1 = time_field23179__1;
time_field23179.cljs$core$IFn$_invoke$arity$2 = time_field23179__2;
return time_field23179;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field23179);
/**
* Creates a url input field.
*/
sablono.core.url_field23180 = (function() {
var url_field23180 = null;
var url_field23180__1 = (function (name__11139__auto__){return url_field23180.call(null,name__11139__auto__,null);
});
var url_field23180__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__11139__auto__,value__11140__auto__);
});
url_field23180 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return url_field23180__1.call(this,name__11139__auto__);
case 2:
return url_field23180__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field23180.cljs$core$IFn$_invoke$arity$1 = url_field23180__1;
url_field23180.cljs$core$IFn$_invoke$arity$2 = url_field23180__2;
return url_field23180;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field23180);
/**
* Creates a week input field.
*/
sablono.core.week_field23181 = (function() {
var week_field23181 = null;
var week_field23181__1 = (function (name__11139__auto__){return week_field23181.call(null,name__11139__auto__,null);
});
var week_field23181__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__11139__auto__,value__11140__auto__);
});
week_field23181 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return week_field23181__1.call(this,name__11139__auto__);
case 2:
return week_field23181__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field23181.cljs$core$IFn$_invoke$arity$1 = week_field23181__1;
week_field23181.cljs$core$IFn$_invoke$arity$2 = week_field23181__2;
return week_field23181;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field23181);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box23182 = (function() {
var check_box23182 = null;
var check_box23182__1 = (function (name){return check_box23182.call(null,name,null);
});
var check_box23182__2 = (function (name,checked_QMARK_){return check_box23182.call(null,name,checked_QMARK_,"true");
});
var check_box23182__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box23182 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box23182__1.call(this,name);
case 2:
return check_box23182__2.call(this,name,checked_QMARK_);
case 3:
return check_box23182__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box23182.cljs$core$IFn$_invoke$arity$1 = check_box23182__1;
check_box23182.cljs$core$IFn$_invoke$arity$2 = check_box23182__2;
check_box23182.cljs$core$IFn$_invoke$arity$3 = check_box23182__3;
return check_box23182;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box23182);
/**
* Creates a radio button.
*/
sablono.core.radio_button23183 = (function() {
var radio_button23183 = null;
var radio_button23183__1 = (function (group){return radio_button23183.call(null,group,null);
});
var radio_button23183__2 = (function (group,checked_QMARK_){return radio_button23183.call(null,group,checked_QMARK_,"true");
});
var radio_button23183__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button23183 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button23183__1.call(this,group);
case 2:
return radio_button23183__2.call(this,group,checked_QMARK_);
case 3:
return radio_button23183__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button23183.cljs$core$IFn$_invoke$arity$1 = radio_button23183__1;
radio_button23183.cljs$core$IFn$_invoke$arity$2 = radio_button23183__2;
radio_button23183.cljs$core$IFn$_invoke$arity$3 = radio_button23183__3;
return radio_button23183;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button23183);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options23184 = (function() {
var select_options23184 = null;
var select_options23184__1 = (function (coll){return select_options23184.call(null,coll,null);
});
var select_options23184__2 = (function (coll,selected){var iter__4375__auto__ = (function iter__23193(s__23194){return (new cljs.core.LazySeq(null,(function (){var s__23194__$1 = s__23194;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23194__$1);if(temp__4126__auto__)
{var s__23194__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23194__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__23194__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__23196 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__23195 = (0);while(true){
if((i__23195 < size__4374__auto__))
{var x = cljs.core._nth.call(null,c__4373__auto__,i__23195);cljs.core.chunk_append.call(null,b__23196,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23199 = x;var text = cljs.core.nth.call(null,vec__23199,(0),null);var val = cljs.core.nth.call(null,vec__23199,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__23199,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options23184.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__23201 = (i__23195 + (1));
i__23195 = G__23201;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23196),iter__23193.call(null,cljs.core.chunk_rest.call(null,s__23194__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23196),null);
}
} else
{var x = cljs.core.first.call(null,s__23194__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23200 = x;var text = cljs.core.nth.call(null,vec__23200,(0),null);var val = cljs.core.nth.call(null,vec__23200,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__23200,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options23184.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__23193.call(null,cljs.core.rest.call(null,s__23194__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__.call(null,coll);
});
select_options23184 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options23184__1.call(this,coll);
case 2:
return select_options23184__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options23184.cljs$core$IFn$_invoke$arity$1 = select_options23184__1;
select_options23184.cljs$core$IFn$_invoke$arity$2 = select_options23184__2;
return select_options23184;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options23184);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down23202 = (function() {
var drop_down23202 = null;
var drop_down23202__2 = (function (name,options){return drop_down23202.call(null,name,options,null);
});
var drop_down23202__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down23202 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down23202__2.call(this,name,options);
case 3:
return drop_down23202__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down23202.cljs$core$IFn$_invoke$arity$2 = drop_down23202__2;
drop_down23202.cljs$core$IFn$_invoke$arity$3 = drop_down23202__3;
return drop_down23202;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down23202);
/**
* Creates a text area element.
*/
sablono.core.text_area23203 = (function() {
var text_area23203 = null;
var text_area23203__1 = (function (name){return text_area23203.call(null,name,null);
});
var text_area23203__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area23203 = function(name,value){
switch(arguments.length){
case 1:
return text_area23203__1.call(this,name);
case 2:
return text_area23203__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area23203.cljs$core$IFn$_invoke$arity$1 = text_area23203__1;
text_area23203.cljs$core$IFn$_invoke$arity$2 = text_area23203__2;
return text_area23203;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area23203);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label23204 = (function label23204(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label23204);
/**
* Creates a submit button.
*/
sablono.core.submit_button23205 = (function submit_button23205(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button23205);
/**
* Creates a form reset button.
*/
sablono.core.reset_button23206 = (function reset_button23206(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button23206);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to23207 = (function() { 
var form_to23207__delegate = function (p__23208,body){var vec__23210 = p__23208;var method = cljs.core.nth.call(null,vec__23210,(0),null);var action = cljs.core.nth.call(null,vec__23210,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to23207 = function (p__23208,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to23207__delegate.call(this,p__23208,body);};
form_to23207.cljs$lang$maxFixedArity = 1;
form_to23207.cljs$lang$applyTo = (function (arglist__23211){
var p__23208 = cljs.core.first(arglist__23211);
var body = cljs.core.rest(arglist__23211);
return form_to23207__delegate(p__23208,body);
});
form_to23207.cljs$core$IFn$_invoke$arity$variadic = form_to23207__delegate;
return form_to23207;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to23207);
