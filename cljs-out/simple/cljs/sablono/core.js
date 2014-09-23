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
var G__31125__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__31124 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__31124,(0),null);var body = cljs.core.nthnext.call(null,vec__31124,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__31125 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__31125__delegate.call(this,args);};
G__31125.cljs$lang$maxFixedArity = 0;
G__31125.cljs$lang$applyTo = (function (arglist__31126){
var args = cljs.core.seq(arglist__31126);
return G__31125__delegate(args);
});
G__31125.cljs$core$IFn$_invoke$arity$variadic = G__31125__delegate;
return G__31125;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__31131(s__31132){return (new cljs.core.LazySeq(null,(function (){var s__31132__$1 = s__31132;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31132__$1);if(temp__4126__auto__)
{var s__31132__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31132__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__31132__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__31134 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__31133 = (0);while(true){
if((i__31133 < size__4282__auto__))
{var args = cljs.core._nth.call(null,c__4281__auto__,i__31133);cljs.core.chunk_append.call(null,b__31134,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__31135 = (i__31133 + (1));
i__31133 = G__31135;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31134),iter__31131.call(null,cljs.core.chunk_rest.call(null,s__31132__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31134),null);
}
} else
{var args = cljs.core.first.call(null,s__31132__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__31131.call(null,cljs.core.rest.call(null,s__31132__$2)));
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
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__31140(s__31141){return (new cljs.core.LazySeq(null,(function (){var s__31141__$1 = s__31141;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31141__$1);if(temp__4126__auto__)
{var s__31141__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31141__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__31141__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__31143 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__31142 = (0);while(true){
if((i__31142 < size__4282__auto__))
{var style = cljs.core._nth.call(null,c__4281__auto__,i__31142);cljs.core.chunk_append.call(null,b__31143,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__31144 = (i__31142 + (1));
i__31142 = G__31144;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31143),iter__31140.call(null,cljs.core.chunk_rest.call(null,s__31141__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31143),null);
}
} else
{var style = cljs.core.first.call(null,s__31141__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__31140.call(null,cljs.core.rest.call(null,s__31141__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__31145){
var styles = cljs.core.seq(arglist__31145);
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
sablono.core.link_to31146 = (function() { 
var link_to31146__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to31146 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to31146__delegate.call(this,url,content);};
link_to31146.cljs$lang$maxFixedArity = 1;
link_to31146.cljs$lang$applyTo = (function (arglist__31147){
var url = cljs.core.first(arglist__31147);
var content = cljs.core.rest(arglist__31147);
return link_to31146__delegate(url,content);
});
link_to31146.cljs$core$IFn$_invoke$arity$variadic = link_to31146__delegate;
return link_to31146;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to31146);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to31148 = (function() { 
var mail_to31148__delegate = function (e_mail,p__31149){var vec__31151 = p__31149;var content = cljs.core.nth.call(null,vec__31151,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to31148 = function (e_mail,var_args){
var p__31149 = null;if (arguments.length > 1) {
  p__31149 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to31148__delegate.call(this,e_mail,p__31149);};
mail_to31148.cljs$lang$maxFixedArity = 1;
mail_to31148.cljs$lang$applyTo = (function (arglist__31152){
var e_mail = cljs.core.first(arglist__31152);
var p__31149 = cljs.core.rest(arglist__31152);
return mail_to31148__delegate(e_mail,p__31149);
});
mail_to31148.cljs$core$IFn$_invoke$arity$variadic = mail_to31148__delegate;
return mail_to31148;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to31148);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list31153 = (function unordered_list31153(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4283__auto__ = (function iter__31158(s__31159){return (new cljs.core.LazySeq(null,(function (){var s__31159__$1 = s__31159;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31159__$1);if(temp__4126__auto__)
{var s__31159__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31159__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__31159__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__31161 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__31160 = (0);while(true){
if((i__31160 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__31160);cljs.core.chunk_append.call(null,b__31161,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__31162 = (i__31160 + (1));
i__31160 = G__31162;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31161),iter__31158.call(null,cljs.core.chunk_rest.call(null,s__31159__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31161),null);
}
} else
{var x = cljs.core.first.call(null,s__31159__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__31158.call(null,cljs.core.rest.call(null,s__31159__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list31153);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list31163 = (function ordered_list31163(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4283__auto__ = (function iter__31168(s__31169){return (new cljs.core.LazySeq(null,(function (){var s__31169__$1 = s__31169;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31169__$1);if(temp__4126__auto__)
{var s__31169__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31169__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__31169__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__31171 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__31170 = (0);while(true){
if((i__31170 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__31170);cljs.core.chunk_append.call(null,b__31171,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__31172 = (i__31170 + (1));
i__31170 = G__31172;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31171),iter__31168.call(null,cljs.core.chunk_rest.call(null,s__31169__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31171),null);
}
} else
{var x = cljs.core.first.call(null,s__31169__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__31168.call(null,cljs.core.rest.call(null,s__31169__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list31163);
/**
* Create an image element.
*/
sablono.core.image31173 = (function() {
var image31173 = null;
var image31173__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image31173__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image31173 = function(src,alt){
switch(arguments.length){
case 1:
return image31173__1.call(this,src);
case 2:
return image31173__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image31173.cljs$core$IFn$_invoke$arity$1 = image31173__1;
image31173.cljs$core$IFn$_invoke$arity$2 = image31173__2;
return image31173;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image31173);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__31174_SHARP_,p2__31175_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31174_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__31175_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__31176_SHARP_,p2__31177_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31176_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__31177_SHARP_));
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
sablono.core.color_field31178 = (function() {
var color_field31178 = null;
var color_field31178__1 = (function (name__10286__auto__){return color_field31178.call(null,name__10286__auto__,null);
});
var color_field31178__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10286__auto__,value__10287__auto__);
});
color_field31178 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return color_field31178__1.call(this,name__10286__auto__);
case 2:
return color_field31178__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field31178.cljs$core$IFn$_invoke$arity$1 = color_field31178__1;
color_field31178.cljs$core$IFn$_invoke$arity$2 = color_field31178__2;
return color_field31178;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field31178);
/**
* Creates a date input field.
*/
sablono.core.date_field31179 = (function() {
var date_field31179 = null;
var date_field31179__1 = (function (name__10286__auto__){return date_field31179.call(null,name__10286__auto__,null);
});
var date_field31179__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10286__auto__,value__10287__auto__);
});
date_field31179 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return date_field31179__1.call(this,name__10286__auto__);
case 2:
return date_field31179__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field31179.cljs$core$IFn$_invoke$arity$1 = date_field31179__1;
date_field31179.cljs$core$IFn$_invoke$arity$2 = date_field31179__2;
return date_field31179;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field31179);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field31180 = (function() {
var datetime_field31180 = null;
var datetime_field31180__1 = (function (name__10286__auto__){return datetime_field31180.call(null,name__10286__auto__,null);
});
var datetime_field31180__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10286__auto__,value__10287__auto__);
});
datetime_field31180 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return datetime_field31180__1.call(this,name__10286__auto__);
case 2:
return datetime_field31180__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field31180.cljs$core$IFn$_invoke$arity$1 = datetime_field31180__1;
datetime_field31180.cljs$core$IFn$_invoke$arity$2 = datetime_field31180__2;
return datetime_field31180;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field31180);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field31181 = (function() {
var datetime_local_field31181 = null;
var datetime_local_field31181__1 = (function (name__10286__auto__){return datetime_local_field31181.call(null,name__10286__auto__,null);
});
var datetime_local_field31181__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10286__auto__,value__10287__auto__);
});
datetime_local_field31181 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return datetime_local_field31181__1.call(this,name__10286__auto__);
case 2:
return datetime_local_field31181__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field31181.cljs$core$IFn$_invoke$arity$1 = datetime_local_field31181__1;
datetime_local_field31181.cljs$core$IFn$_invoke$arity$2 = datetime_local_field31181__2;
return datetime_local_field31181;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field31181);
/**
* Creates a email input field.
*/
sablono.core.email_field31182 = (function() {
var email_field31182 = null;
var email_field31182__1 = (function (name__10286__auto__){return email_field31182.call(null,name__10286__auto__,null);
});
var email_field31182__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10286__auto__,value__10287__auto__);
});
email_field31182 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return email_field31182__1.call(this,name__10286__auto__);
case 2:
return email_field31182__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field31182.cljs$core$IFn$_invoke$arity$1 = email_field31182__1;
email_field31182.cljs$core$IFn$_invoke$arity$2 = email_field31182__2;
return email_field31182;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field31182);
/**
* Creates a file input field.
*/
sablono.core.file_field31183 = (function() {
var file_field31183 = null;
var file_field31183__1 = (function (name__10286__auto__){return file_field31183.call(null,name__10286__auto__,null);
});
var file_field31183__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10286__auto__,value__10287__auto__);
});
file_field31183 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return file_field31183__1.call(this,name__10286__auto__);
case 2:
return file_field31183__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field31183.cljs$core$IFn$_invoke$arity$1 = file_field31183__1;
file_field31183.cljs$core$IFn$_invoke$arity$2 = file_field31183__2;
return file_field31183;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field31183);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field31184 = (function() {
var hidden_field31184 = null;
var hidden_field31184__1 = (function (name__10286__auto__){return hidden_field31184.call(null,name__10286__auto__,null);
});
var hidden_field31184__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10286__auto__,value__10287__auto__);
});
hidden_field31184 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return hidden_field31184__1.call(this,name__10286__auto__);
case 2:
return hidden_field31184__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field31184.cljs$core$IFn$_invoke$arity$1 = hidden_field31184__1;
hidden_field31184.cljs$core$IFn$_invoke$arity$2 = hidden_field31184__2;
return hidden_field31184;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field31184);
/**
* Creates a month input field.
*/
sablono.core.month_field31185 = (function() {
var month_field31185 = null;
var month_field31185__1 = (function (name__10286__auto__){return month_field31185.call(null,name__10286__auto__,null);
});
var month_field31185__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10286__auto__,value__10287__auto__);
});
month_field31185 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return month_field31185__1.call(this,name__10286__auto__);
case 2:
return month_field31185__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field31185.cljs$core$IFn$_invoke$arity$1 = month_field31185__1;
month_field31185.cljs$core$IFn$_invoke$arity$2 = month_field31185__2;
return month_field31185;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field31185);
/**
* Creates a number input field.
*/
sablono.core.number_field31186 = (function() {
var number_field31186 = null;
var number_field31186__1 = (function (name__10286__auto__){return number_field31186.call(null,name__10286__auto__,null);
});
var number_field31186__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10286__auto__,value__10287__auto__);
});
number_field31186 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return number_field31186__1.call(this,name__10286__auto__);
case 2:
return number_field31186__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field31186.cljs$core$IFn$_invoke$arity$1 = number_field31186__1;
number_field31186.cljs$core$IFn$_invoke$arity$2 = number_field31186__2;
return number_field31186;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field31186);
/**
* Creates a password input field.
*/
sablono.core.password_field31187 = (function() {
var password_field31187 = null;
var password_field31187__1 = (function (name__10286__auto__){return password_field31187.call(null,name__10286__auto__,null);
});
var password_field31187__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10286__auto__,value__10287__auto__);
});
password_field31187 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return password_field31187__1.call(this,name__10286__auto__);
case 2:
return password_field31187__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field31187.cljs$core$IFn$_invoke$arity$1 = password_field31187__1;
password_field31187.cljs$core$IFn$_invoke$arity$2 = password_field31187__2;
return password_field31187;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field31187);
/**
* Creates a range input field.
*/
sablono.core.range_field31188 = (function() {
var range_field31188 = null;
var range_field31188__1 = (function (name__10286__auto__){return range_field31188.call(null,name__10286__auto__,null);
});
var range_field31188__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10286__auto__,value__10287__auto__);
});
range_field31188 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return range_field31188__1.call(this,name__10286__auto__);
case 2:
return range_field31188__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field31188.cljs$core$IFn$_invoke$arity$1 = range_field31188__1;
range_field31188.cljs$core$IFn$_invoke$arity$2 = range_field31188__2;
return range_field31188;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field31188);
/**
* Creates a search input field.
*/
sablono.core.search_field31189 = (function() {
var search_field31189 = null;
var search_field31189__1 = (function (name__10286__auto__){return search_field31189.call(null,name__10286__auto__,null);
});
var search_field31189__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10286__auto__,value__10287__auto__);
});
search_field31189 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return search_field31189__1.call(this,name__10286__auto__);
case 2:
return search_field31189__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field31189.cljs$core$IFn$_invoke$arity$1 = search_field31189__1;
search_field31189.cljs$core$IFn$_invoke$arity$2 = search_field31189__2;
return search_field31189;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field31189);
/**
* Creates a tel input field.
*/
sablono.core.tel_field31190 = (function() {
var tel_field31190 = null;
var tel_field31190__1 = (function (name__10286__auto__){return tel_field31190.call(null,name__10286__auto__,null);
});
var tel_field31190__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10286__auto__,value__10287__auto__);
});
tel_field31190 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return tel_field31190__1.call(this,name__10286__auto__);
case 2:
return tel_field31190__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field31190.cljs$core$IFn$_invoke$arity$1 = tel_field31190__1;
tel_field31190.cljs$core$IFn$_invoke$arity$2 = tel_field31190__2;
return tel_field31190;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field31190);
/**
* Creates a text input field.
*/
sablono.core.text_field31191 = (function() {
var text_field31191 = null;
var text_field31191__1 = (function (name__10286__auto__){return text_field31191.call(null,name__10286__auto__,null);
});
var text_field31191__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10286__auto__,value__10287__auto__);
});
text_field31191 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return text_field31191__1.call(this,name__10286__auto__);
case 2:
return text_field31191__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field31191.cljs$core$IFn$_invoke$arity$1 = text_field31191__1;
text_field31191.cljs$core$IFn$_invoke$arity$2 = text_field31191__2;
return text_field31191;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field31191);
/**
* Creates a time input field.
*/
sablono.core.time_field31192 = (function() {
var time_field31192 = null;
var time_field31192__1 = (function (name__10286__auto__){return time_field31192.call(null,name__10286__auto__,null);
});
var time_field31192__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10286__auto__,value__10287__auto__);
});
time_field31192 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return time_field31192__1.call(this,name__10286__auto__);
case 2:
return time_field31192__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field31192.cljs$core$IFn$_invoke$arity$1 = time_field31192__1;
time_field31192.cljs$core$IFn$_invoke$arity$2 = time_field31192__2;
return time_field31192;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field31192);
/**
* Creates a url input field.
*/
sablono.core.url_field31193 = (function() {
var url_field31193 = null;
var url_field31193__1 = (function (name__10286__auto__){return url_field31193.call(null,name__10286__auto__,null);
});
var url_field31193__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10286__auto__,value__10287__auto__);
});
url_field31193 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return url_field31193__1.call(this,name__10286__auto__);
case 2:
return url_field31193__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field31193.cljs$core$IFn$_invoke$arity$1 = url_field31193__1;
url_field31193.cljs$core$IFn$_invoke$arity$2 = url_field31193__2;
return url_field31193;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field31193);
/**
* Creates a week input field.
*/
sablono.core.week_field31194 = (function() {
var week_field31194 = null;
var week_field31194__1 = (function (name__10286__auto__){return week_field31194.call(null,name__10286__auto__,null);
});
var week_field31194__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10286__auto__,value__10287__auto__);
});
week_field31194 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return week_field31194__1.call(this,name__10286__auto__);
case 2:
return week_field31194__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field31194.cljs$core$IFn$_invoke$arity$1 = week_field31194__1;
week_field31194.cljs$core$IFn$_invoke$arity$2 = week_field31194__2;
return week_field31194;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field31194);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box31195 = (function() {
var check_box31195 = null;
var check_box31195__1 = (function (name){return check_box31195.call(null,name,null);
});
var check_box31195__2 = (function (name,checked_QMARK_){return check_box31195.call(null,name,checked_QMARK_,"true");
});
var check_box31195__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box31195 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box31195__1.call(this,name);
case 2:
return check_box31195__2.call(this,name,checked_QMARK_);
case 3:
return check_box31195__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box31195.cljs$core$IFn$_invoke$arity$1 = check_box31195__1;
check_box31195.cljs$core$IFn$_invoke$arity$2 = check_box31195__2;
check_box31195.cljs$core$IFn$_invoke$arity$3 = check_box31195__3;
return check_box31195;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box31195);
/**
* Creates a radio button.
*/
sablono.core.radio_button31196 = (function() {
var radio_button31196 = null;
var radio_button31196__1 = (function (group){return radio_button31196.call(null,group,null);
});
var radio_button31196__2 = (function (group,checked_QMARK_){return radio_button31196.call(null,group,checked_QMARK_,"true");
});
var radio_button31196__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button31196 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button31196__1.call(this,group);
case 2:
return radio_button31196__2.call(this,group,checked_QMARK_);
case 3:
return radio_button31196__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button31196.cljs$core$IFn$_invoke$arity$1 = radio_button31196__1;
radio_button31196.cljs$core$IFn$_invoke$arity$2 = radio_button31196__2;
radio_button31196.cljs$core$IFn$_invoke$arity$3 = radio_button31196__3;
return radio_button31196;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button31196);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options31197 = (function() {
var select_options31197 = null;
var select_options31197__1 = (function (coll){return select_options31197.call(null,coll,null);
});
var select_options31197__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__31206(s__31207){return (new cljs.core.LazySeq(null,(function (){var s__31207__$1 = s__31207;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31207__$1);if(temp__4126__auto__)
{var s__31207__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31207__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__31207__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__31209 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__31208 = (0);while(true){
if((i__31208 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__31208);cljs.core.chunk_append.call(null,b__31209,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__31212 = x;var text = cljs.core.nth.call(null,vec__31212,(0),null);var val = cljs.core.nth.call(null,vec__31212,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__31212,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options31197.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__31214 = (i__31208 + (1));
i__31208 = G__31214;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31209),iter__31206.call(null,cljs.core.chunk_rest.call(null,s__31207__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31209),null);
}
} else
{var x = cljs.core.first.call(null,s__31207__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__31213 = x;var text = cljs.core.nth.call(null,vec__31213,(0),null);var val = cljs.core.nth.call(null,vec__31213,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__31213,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options31197.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__31206.call(null,cljs.core.rest.call(null,s__31207__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
});
select_options31197 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options31197__1.call(this,coll);
case 2:
return select_options31197__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options31197.cljs$core$IFn$_invoke$arity$1 = select_options31197__1;
select_options31197.cljs$core$IFn$_invoke$arity$2 = select_options31197__2;
return select_options31197;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options31197);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down31215 = (function() {
var drop_down31215 = null;
var drop_down31215__2 = (function (name,options){return drop_down31215.call(null,name,options,null);
});
var drop_down31215__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down31215 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down31215__2.call(this,name,options);
case 3:
return drop_down31215__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down31215.cljs$core$IFn$_invoke$arity$2 = drop_down31215__2;
drop_down31215.cljs$core$IFn$_invoke$arity$3 = drop_down31215__3;
return drop_down31215;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down31215);
/**
* Creates a text area element.
*/
sablono.core.text_area31216 = (function() {
var text_area31216 = null;
var text_area31216__1 = (function (name){return text_area31216.call(null,name,null);
});
var text_area31216__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area31216 = function(name,value){
switch(arguments.length){
case 1:
return text_area31216__1.call(this,name);
case 2:
return text_area31216__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area31216.cljs$core$IFn$_invoke$arity$1 = text_area31216__1;
text_area31216.cljs$core$IFn$_invoke$arity$2 = text_area31216__2;
return text_area31216;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area31216);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label31217 = (function label31217(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label31217);
/**
* Creates a submit button.
*/
sablono.core.submit_button31218 = (function submit_button31218(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button31218);
/**
* Creates a form reset button.
*/
sablono.core.reset_button31219 = (function reset_button31219(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button31219);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to31220 = (function() { 
var form_to31220__delegate = function (p__31221,body){var vec__31223 = p__31221;var method = cljs.core.nth.call(null,vec__31223,(0),null);var action = cljs.core.nth.call(null,vec__31223,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to31220 = function (p__31221,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to31220__delegate.call(this,p__31221,body);};
form_to31220.cljs$lang$maxFixedArity = 1;
form_to31220.cljs$lang$applyTo = (function (arglist__31224){
var p__31221 = cljs.core.first(arglist__31224);
var body = cljs.core.rest(arglist__31224);
return form_to31220__delegate(p__31221,body);
});
form_to31220.cljs$core$IFn$_invoke$arity$variadic = form_to31220__delegate;
return form_to31220;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to31220);
