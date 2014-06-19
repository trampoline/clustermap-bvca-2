// Compiled by ClojureScript 0.0-2227
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_40158 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_40159 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_40160 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$579,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_40160,opt_wrapper_40158,table_section_wrapper_40159,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),opt_wrapper_40158,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),table_section_wrapper_40159,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_40159,cell_wrapper_40160,table_section_wrapper_40159,table_section_wrapper_40159]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3527__auto__ = div.firstChild;if(cljs.core.truth_(and__3527__auto__))
{return div.firstChild.childNodes;
} else
{return and__3527__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__40165 = cljs.core.seq(tbody);var chunk__40166 = null;var count__40167 = 0;var i__40168 = 0;while(true){
if((i__40168 < count__40167))
{var child = chunk__40166.cljs$core$IIndexed$_nth$arity$2(null,i__40168);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__40169 = seq__40165;
var G__40170 = chunk__40166;
var G__40171 = count__40167;
var G__40172 = (i__40168 + 1);
seq__40165 = G__40169;
chunk__40166 = G__40170;
count__40167 = G__40171;
i__40168 = G__40172;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__40165);if(temp__4126__auto__)
{var seq__40165__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__40165__$1))
{var c__4295__auto__ = cljs.core.chunk_first(seq__40165__$1);{
var G__40173 = cljs.core.chunk_rest(seq__40165__$1);
var G__40174 = c__4295__auto__;
var G__40175 = cljs.core.count(c__4295__auto__);
var G__40176 = 0;
seq__40165 = G__40173;
chunk__40166 = G__40174;
count__40167 = G__40175;
i__40168 = G__40176;
continue;
}
} else
{var child = cljs.core.first(seq__40165__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__40177 = cljs.core.next(seq__40165__$1);
var G__40178 = null;
var G__40179 = 0;
var G__40180 = 0;
seq__40165 = G__40177;
chunk__40166 = G__40178;
count__40167 = G__40179;
i__40168 = G__40180;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))).toLowerCase();var vec__40182 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$579.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40182,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40182,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40182,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__40183 = wrapper.lastChild;
var G__40184 = (level - 1);
wrapper = G__40183;
level = G__40184;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3527__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3527__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3527__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_(div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s)))
{return domina.html_to_dom(s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj40186 = {};return obj40186;
})();
domina.nodes = (function nodes(content){if((function (){var and__3527__auto__ = content;if(and__3527__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3527__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4166__auto__ = (((content == null))?null:content);return (function (){var or__3539__auto__ = (domina.nodes[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.nodes["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3527__auto__ = nodeseq;if(and__3527__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3527__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4166__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3539__auto__ = (domina.single_node[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.single_node["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3527__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3527__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3527__auto__;
}
})()))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__40187){
var mesg = cljs.core.seq(arglist__40187);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__40188){
var mesg = cljs.core.seq(arglist__40188);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name(id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass(cljs.core.name(class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(class_name))));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(goog.dom.getChildren,domina.nodes(content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__40189){
var contents = cljs.core.seq(arglist__40189);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ancestor_content,descendant_content], 0)),domina.single_node(ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40190_SHARP_){return p1__40190_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(goog.dom.appendChild,parent_content,child_content) : domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__40191_SHARP_,p2__40192_SHARP_){return goog.dom.insertChildAt(p1__40191_SHARP_,p2__40192_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__40191_SHARP_,p2__40192_SHARP_){return goog.dom.insertChildAt(p1__40191_SHARP_,p2__40192_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__40194_SHARP_,p2__40193_SHARP_){return goog.dom.insertSiblingBefore(p2__40193_SHARP_,p1__40194_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__40194_SHARP_,p2__40193_SHARP_){return goog.dom.insertSiblingBefore(p2__40193_SHARP_,p1__40194_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__40196_SHARP_,p2__40195_SHARP_){return goog.dom.insertSiblingAfter(p2__40195_SHARP_,p1__40196_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__40196_SHARP_,p2__40195_SHARP_){return goog.dom.insertSiblingAfter(p2__40195_SHARP_,p1__40196_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__40198_SHARP_,p2__40197_SHARP_){return goog.dom.replaceNode(p2__40197_SHARP_,p1__40198_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__40198_SHARP_,p2__40197_SHARP_){return goog.dom.replaceNode(p2__40197_SHARP_,p1__40198_SHARP_);
}),old_content,new_content));
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node(content),cljs.core.name(name));if(cljs.core.truth_(clojure.string.blank_QMARK_(s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__40203_40207 = cljs.core.seq(domina.nodes(content));var chunk__40204_40208 = null;var count__40205_40209 = 0;var i__40206_40210 = 0;while(true){
if((i__40206_40210 < count__40205_40209))
{var n_40211 = chunk__40204_40208.cljs$core$IIndexed$_nth$arity$2(null,i__40206_40210);goog.style.setStyle(n_40211,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__40212 = seq__40203_40207;
var G__40213 = chunk__40204_40208;
var G__40214 = count__40205_40209;
var G__40215 = (i__40206_40210 + 1);
seq__40203_40207 = G__40212;
chunk__40204_40208 = G__40213;
count__40205_40209 = G__40214;
i__40206_40210 = G__40215;
continue;
}
} else
{var temp__4126__auto___40216 = cljs.core.seq(seq__40203_40207);if(temp__4126__auto___40216)
{var seq__40203_40217__$1 = temp__4126__auto___40216;if(cljs.core.chunked_seq_QMARK_(seq__40203_40217__$1))
{var c__4295__auto___40218 = cljs.core.chunk_first(seq__40203_40217__$1);{
var G__40219 = cljs.core.chunk_rest(seq__40203_40217__$1);
var G__40220 = c__4295__auto___40218;
var G__40221 = cljs.core.count(c__4295__auto___40218);
var G__40222 = 0;
seq__40203_40207 = G__40219;
chunk__40204_40208 = G__40220;
count__40205_40209 = G__40221;
i__40206_40210 = G__40222;
continue;
}
} else
{var n_40223 = cljs.core.first(seq__40203_40217__$1);goog.style.setStyle(n_40223,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__40224 = cljs.core.next(seq__40203_40217__$1);
var G__40225 = null;
var G__40226 = 0;
var G__40227 = 0;
seq__40203_40207 = G__40224;
chunk__40204_40208 = G__40225;
count__40205_40209 = G__40226;
i__40206_40210 = G__40227;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__40228){
var content = cljs.core.first(arglist__40228);
arglist__40228 = cljs.core.next(arglist__40228);
var name = cljs.core.first(arglist__40228);
var value = cljs.core.rest(arglist__40228);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__40233_40237 = cljs.core.seq(domina.nodes(content));var chunk__40234_40238 = null;var count__40235_40239 = 0;var i__40236_40240 = 0;while(true){
if((i__40236_40240 < count__40235_40239))
{var n_40241 = chunk__40234_40238.cljs$core$IIndexed$_nth$arity$2(null,i__40236_40240);n_40241.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__40242 = seq__40233_40237;
var G__40243 = chunk__40234_40238;
var G__40244 = count__40235_40239;
var G__40245 = (i__40236_40240 + 1);
seq__40233_40237 = G__40242;
chunk__40234_40238 = G__40243;
count__40235_40239 = G__40244;
i__40236_40240 = G__40245;
continue;
}
} else
{var temp__4126__auto___40246 = cljs.core.seq(seq__40233_40237);if(temp__4126__auto___40246)
{var seq__40233_40247__$1 = temp__4126__auto___40246;if(cljs.core.chunked_seq_QMARK_(seq__40233_40247__$1))
{var c__4295__auto___40248 = cljs.core.chunk_first(seq__40233_40247__$1);{
var G__40249 = cljs.core.chunk_rest(seq__40233_40247__$1);
var G__40250 = c__4295__auto___40248;
var G__40251 = cljs.core.count(c__4295__auto___40248);
var G__40252 = 0;
seq__40233_40237 = G__40249;
chunk__40234_40238 = G__40250;
count__40235_40239 = G__40251;
i__40236_40240 = G__40252;
continue;
}
} else
{var n_40253 = cljs.core.first(seq__40233_40247__$1);n_40253.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__40254 = cljs.core.next(seq__40233_40247__$1);
var G__40255 = null;
var G__40256 = 0;
var G__40257 = 0;
seq__40233_40237 = G__40254;
chunk__40234_40238 = G__40255;
count__40235_40239 = G__40256;
i__40236_40240 = G__40257;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__40258){
var content = cljs.core.first(arglist__40258);
arglist__40258 = cljs.core.next(arglist__40258);
var name = cljs.core.first(arglist__40258);
var value = cljs.core.rest(arglist__40258);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__40263_40267 = cljs.core.seq(domina.nodes(content));var chunk__40264_40268 = null;var count__40265_40269 = 0;var i__40266_40270 = 0;while(true){
if((i__40266_40270 < count__40265_40269))
{var n_40271 = chunk__40264_40268.cljs$core$IIndexed$_nth$arity$2(null,i__40266_40270);n_40271.removeAttribute(cljs.core.name(name));
{
var G__40272 = seq__40263_40267;
var G__40273 = chunk__40264_40268;
var G__40274 = count__40265_40269;
var G__40275 = (i__40266_40270 + 1);
seq__40263_40267 = G__40272;
chunk__40264_40268 = G__40273;
count__40265_40269 = G__40274;
i__40266_40270 = G__40275;
continue;
}
} else
{var temp__4126__auto___40276 = cljs.core.seq(seq__40263_40267);if(temp__4126__auto___40276)
{var seq__40263_40277__$1 = temp__4126__auto___40276;if(cljs.core.chunked_seq_QMARK_(seq__40263_40277__$1))
{var c__4295__auto___40278 = cljs.core.chunk_first(seq__40263_40277__$1);{
var G__40279 = cljs.core.chunk_rest(seq__40263_40277__$1);
var G__40280 = c__4295__auto___40278;
var G__40281 = cljs.core.count(c__4295__auto___40278);
var G__40282 = 0;
seq__40263_40267 = G__40279;
chunk__40264_40268 = G__40280;
count__40265_40269 = G__40281;
i__40266_40270 = G__40282;
continue;
}
} else
{var n_40283 = cljs.core.first(seq__40263_40277__$1);n_40283.removeAttribute(cljs.core.name(name));
{
var G__40284 = cljs.core.next(seq__40263_40277__$1);
var G__40285 = null;
var G__40286 = 0;
var G__40287 = 0;
seq__40263_40267 = G__40284;
chunk__40264_40268 = G__40285;
count__40265_40269 = G__40286;
i__40266_40270 = G__40287;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__40289 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40289,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40289,1,null);if(cljs.core.truth_((function (){var and__3527__auto__ = k;if(cljs.core.truth_(and__3527__auto__))
{return v;
} else
{return and__3527__auto__;
}
})()))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr(content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes(style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes(style.cssText);
} else
{if(cljs.core.constant$keyword$578)
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (node,attrs__$1){
return (function (p1__40290_SHARP_){var attr = attrs__$1.item(p1__40290_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__40297_40303 = cljs.core.seq(styles);var chunk__40298_40304 = null;var count__40299_40305 = 0;var i__40300_40306 = 0;while(true){
if((i__40300_40306 < count__40299_40305))
{var vec__40301_40307 = chunk__40298_40304.cljs$core$IIndexed$_nth$arity$2(null,i__40300_40306);var name_40308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40301_40307,0,null);var value_40309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40301_40307,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_40308,cljs.core.array_seq([value_40309], 0));
{
var G__40310 = seq__40297_40303;
var G__40311 = chunk__40298_40304;
var G__40312 = count__40299_40305;
var G__40313 = (i__40300_40306 + 1);
seq__40297_40303 = G__40310;
chunk__40298_40304 = G__40311;
count__40299_40305 = G__40312;
i__40300_40306 = G__40313;
continue;
}
} else
{var temp__4126__auto___40314 = cljs.core.seq(seq__40297_40303);if(temp__4126__auto___40314)
{var seq__40297_40315__$1 = temp__4126__auto___40314;if(cljs.core.chunked_seq_QMARK_(seq__40297_40315__$1))
{var c__4295__auto___40316 = cljs.core.chunk_first(seq__40297_40315__$1);{
var G__40317 = cljs.core.chunk_rest(seq__40297_40315__$1);
var G__40318 = c__4295__auto___40316;
var G__40319 = cljs.core.count(c__4295__auto___40316);
var G__40320 = 0;
seq__40297_40303 = G__40317;
chunk__40298_40304 = G__40318;
count__40299_40305 = G__40319;
i__40300_40306 = G__40320;
continue;
}
} else
{var vec__40302_40321 = cljs.core.first(seq__40297_40315__$1);var name_40322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40302_40321,0,null);var value_40323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40302_40321,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_40322,cljs.core.array_seq([value_40323], 0));
{
var G__40324 = cljs.core.next(seq__40297_40315__$1);
var G__40325 = null;
var G__40326 = 0;
var G__40327 = 0;
seq__40297_40303 = G__40324;
chunk__40298_40304 = G__40325;
count__40299_40305 = G__40326;
i__40300_40306 = G__40327;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__40334_40340 = cljs.core.seq(attrs);var chunk__40335_40341 = null;var count__40336_40342 = 0;var i__40337_40343 = 0;while(true){
if((i__40337_40343 < count__40336_40342))
{var vec__40338_40344 = chunk__40335_40341.cljs$core$IIndexed$_nth$arity$2(null,i__40337_40343);var name_40345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40338_40344,0,null);var value_40346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40338_40344,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_40345,cljs.core.array_seq([value_40346], 0));
{
var G__40347 = seq__40334_40340;
var G__40348 = chunk__40335_40341;
var G__40349 = count__40336_40342;
var G__40350 = (i__40337_40343 + 1);
seq__40334_40340 = G__40347;
chunk__40335_40341 = G__40348;
count__40336_40342 = G__40349;
i__40337_40343 = G__40350;
continue;
}
} else
{var temp__4126__auto___40351 = cljs.core.seq(seq__40334_40340);if(temp__4126__auto___40351)
{var seq__40334_40352__$1 = temp__4126__auto___40351;if(cljs.core.chunked_seq_QMARK_(seq__40334_40352__$1))
{var c__4295__auto___40353 = cljs.core.chunk_first(seq__40334_40352__$1);{
var G__40354 = cljs.core.chunk_rest(seq__40334_40352__$1);
var G__40355 = c__4295__auto___40353;
var G__40356 = cljs.core.count(c__4295__auto___40353);
var G__40357 = 0;
seq__40334_40340 = G__40354;
chunk__40335_40341 = G__40355;
count__40336_40342 = G__40356;
i__40337_40343 = G__40357;
continue;
}
} else
{var vec__40339_40358 = cljs.core.first(seq__40334_40352__$1);var name_40359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40339_40358,0,null);var value_40360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40339_40358,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_40359,cljs.core.array_seq([value_40360], 0));
{
var G__40361 = cljs.core.next(seq__40334_40352__$1);
var G__40362 = null;
var G__40363 = 0;
var G__40364 = 0;
seq__40334_40340 = G__40361;
chunk__40335_40341 = G__40362;
count__40336_40342 = G__40363;
i__40337_40343 = G__40364;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__40369_40373 = cljs.core.seq(domina.nodes(content));var chunk__40370_40374 = null;var count__40371_40375 = 0;var i__40372_40376 = 0;while(true){
if((i__40372_40376 < count__40371_40375))
{var node_40377 = chunk__40370_40374.cljs$core$IIndexed$_nth$arity$2(null,i__40372_40376);goog.dom.classes.add(node_40377,class$);
{
var G__40378 = seq__40369_40373;
var G__40379 = chunk__40370_40374;
var G__40380 = count__40371_40375;
var G__40381 = (i__40372_40376 + 1);
seq__40369_40373 = G__40378;
chunk__40370_40374 = G__40379;
count__40371_40375 = G__40380;
i__40372_40376 = G__40381;
continue;
}
} else
{var temp__4126__auto___40382 = cljs.core.seq(seq__40369_40373);if(temp__4126__auto___40382)
{var seq__40369_40383__$1 = temp__4126__auto___40382;if(cljs.core.chunked_seq_QMARK_(seq__40369_40383__$1))
{var c__4295__auto___40384 = cljs.core.chunk_first(seq__40369_40383__$1);{
var G__40385 = cljs.core.chunk_rest(seq__40369_40383__$1);
var G__40386 = c__4295__auto___40384;
var G__40387 = cljs.core.count(c__4295__auto___40384);
var G__40388 = 0;
seq__40369_40373 = G__40385;
chunk__40370_40374 = G__40386;
count__40371_40375 = G__40387;
i__40372_40376 = G__40388;
continue;
}
} else
{var node_40389 = cljs.core.first(seq__40369_40383__$1);goog.dom.classes.add(node_40389,class$);
{
var G__40390 = cljs.core.next(seq__40369_40383__$1);
var G__40391 = null;
var G__40392 = 0;
var G__40393 = 0;
seq__40369_40373 = G__40390;
chunk__40370_40374 = G__40391;
count__40371_40375 = G__40392;
i__40372_40376 = G__40393;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__40398_40402 = cljs.core.seq(domina.nodes(content));var chunk__40399_40403 = null;var count__40400_40404 = 0;var i__40401_40405 = 0;while(true){
if((i__40401_40405 < count__40400_40404))
{var node_40406 = chunk__40399_40403.cljs$core$IIndexed$_nth$arity$2(null,i__40401_40405);goog.dom.classes.remove(node_40406,class$);
{
var G__40407 = seq__40398_40402;
var G__40408 = chunk__40399_40403;
var G__40409 = count__40400_40404;
var G__40410 = (i__40401_40405 + 1);
seq__40398_40402 = G__40407;
chunk__40399_40403 = G__40408;
count__40400_40404 = G__40409;
i__40401_40405 = G__40410;
continue;
}
} else
{var temp__4126__auto___40411 = cljs.core.seq(seq__40398_40402);if(temp__4126__auto___40411)
{var seq__40398_40412__$1 = temp__4126__auto___40411;if(cljs.core.chunked_seq_QMARK_(seq__40398_40412__$1))
{var c__4295__auto___40413 = cljs.core.chunk_first(seq__40398_40412__$1);{
var G__40414 = cljs.core.chunk_rest(seq__40398_40412__$1);
var G__40415 = c__4295__auto___40413;
var G__40416 = cljs.core.count(c__4295__auto___40413);
var G__40417 = 0;
seq__40398_40402 = G__40414;
chunk__40399_40403 = G__40415;
count__40400_40404 = G__40416;
i__40401_40405 = G__40417;
continue;
}
} else
{var node_40418 = cljs.core.first(seq__40398_40412__$1);goog.dom.classes.remove(node_40418,class$);
{
var G__40419 = cljs.core.next(seq__40398_40412__$1);
var G__40420 = null;
var G__40421 = 0;
var G__40422 = 0;
seq__40398_40402 = G__40419;
chunk__40399_40403 = G__40420;
count__40400_40404 = G__40421;
i__40401_40405 = G__40422;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__40427_40431 = cljs.core.seq(domina.nodes(content));var chunk__40428_40432 = null;var count__40429_40433 = 0;var i__40430_40434 = 0;while(true){
if((i__40430_40434 < count__40429_40433))
{var node_40435 = chunk__40428_40432.cljs$core$IIndexed$_nth$arity$2(null,i__40430_40434);goog.dom.classes.toggle(node_40435,class$);
{
var G__40436 = seq__40427_40431;
var G__40437 = chunk__40428_40432;
var G__40438 = count__40429_40433;
var G__40439 = (i__40430_40434 + 1);
seq__40427_40431 = G__40436;
chunk__40428_40432 = G__40437;
count__40429_40433 = G__40438;
i__40430_40434 = G__40439;
continue;
}
} else
{var temp__4126__auto___40440 = cljs.core.seq(seq__40427_40431);if(temp__4126__auto___40440)
{var seq__40427_40441__$1 = temp__4126__auto___40440;if(cljs.core.chunked_seq_QMARK_(seq__40427_40441__$1))
{var c__4295__auto___40442 = cljs.core.chunk_first(seq__40427_40441__$1);{
var G__40443 = cljs.core.chunk_rest(seq__40427_40441__$1);
var G__40444 = c__4295__auto___40442;
var G__40445 = cljs.core.count(c__4295__auto___40442);
var G__40446 = 0;
seq__40427_40431 = G__40443;
chunk__40428_40432 = G__40444;
count__40429_40433 = G__40445;
i__40430_40434 = G__40446;
continue;
}
} else
{var node_40447 = cljs.core.first(seq__40427_40441__$1);goog.dom.classes.toggle(node_40447,class$);
{
var G__40448 = cljs.core.next(seq__40427_40441__$1);
var G__40449 = null;
var G__40450 = 0;
var G__40451 = 0;
seq__40427_40431 = G__40448;
chunk__40428_40432 = G__40449;
count__40429_40433 = G__40450;
i__40430_40434 = G__40451;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_40460__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__40456_40461 = cljs.core.seq(domina.nodes(content));var chunk__40457_40462 = null;var count__40458_40463 = 0;var i__40459_40464 = 0;while(true){
if((i__40459_40464 < count__40458_40463))
{var node_40465 = chunk__40457_40462.cljs$core$IIndexed$_nth$arity$2(null,i__40459_40464);goog.dom.classes.set(node_40465,classes_40460__$1);
{
var G__40466 = seq__40456_40461;
var G__40467 = chunk__40457_40462;
var G__40468 = count__40458_40463;
var G__40469 = (i__40459_40464 + 1);
seq__40456_40461 = G__40466;
chunk__40457_40462 = G__40467;
count__40458_40463 = G__40468;
i__40459_40464 = G__40469;
continue;
}
} else
{var temp__4126__auto___40470 = cljs.core.seq(seq__40456_40461);if(temp__4126__auto___40470)
{var seq__40456_40471__$1 = temp__4126__auto___40470;if(cljs.core.chunked_seq_QMARK_(seq__40456_40471__$1))
{var c__4295__auto___40472 = cljs.core.chunk_first(seq__40456_40471__$1);{
var G__40473 = cljs.core.chunk_rest(seq__40456_40471__$1);
var G__40474 = c__4295__auto___40472;
var G__40475 = cljs.core.count(c__4295__auto___40472);
var G__40476 = 0;
seq__40456_40461 = G__40473;
chunk__40457_40462 = G__40474;
count__40458_40463 = G__40475;
i__40459_40464 = G__40476;
continue;
}
} else
{var node_40477 = cljs.core.first(seq__40456_40471__$1);goog.dom.classes.set(node_40477,classes_40460__$1);
{
var G__40478 = cljs.core.next(seq__40456_40471__$1);
var G__40479 = null;
var G__40480 = 0;
var G__40481 = 0;
seq__40456_40461 = G__40478;
chunk__40457_40462 = G__40479;
count__40458_40463 = G__40480;
i__40459_40464 = G__40481;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node(content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__40486_40490 = cljs.core.seq(domina.nodes(content));var chunk__40487_40491 = null;var count__40488_40492 = 0;var i__40489_40493 = 0;while(true){
if((i__40489_40493 < count__40488_40492))
{var node_40494 = chunk__40487_40491.cljs$core$IIndexed$_nth$arity$2(null,i__40489_40493);goog.dom.setTextContent(node_40494,value);
{
var G__40495 = seq__40486_40490;
var G__40496 = chunk__40487_40491;
var G__40497 = count__40488_40492;
var G__40498 = (i__40489_40493 + 1);
seq__40486_40490 = G__40495;
chunk__40487_40491 = G__40496;
count__40488_40492 = G__40497;
i__40489_40493 = G__40498;
continue;
}
} else
{var temp__4126__auto___40499 = cljs.core.seq(seq__40486_40490);if(temp__4126__auto___40499)
{var seq__40486_40500__$1 = temp__4126__auto___40499;if(cljs.core.chunked_seq_QMARK_(seq__40486_40500__$1))
{var c__4295__auto___40501 = cljs.core.chunk_first(seq__40486_40500__$1);{
var G__40502 = cljs.core.chunk_rest(seq__40486_40500__$1);
var G__40503 = c__4295__auto___40501;
var G__40504 = cljs.core.count(c__4295__auto___40501);
var G__40505 = 0;
seq__40486_40490 = G__40502;
chunk__40487_40491 = G__40503;
count__40488_40492 = G__40504;
i__40489_40493 = G__40505;
continue;
}
} else
{var node_40506 = cljs.core.first(seq__40486_40500__$1);goog.dom.setTextContent(node_40506,value);
{
var G__40507 = cljs.core.next(seq__40486_40500__$1);
var G__40508 = null;
var G__40509 = 0;
var G__40510 = 0;
seq__40486_40490 = G__40507;
chunk__40487_40491 = G__40508;
count__40488_40492 = G__40509;
i__40489_40493 = G__40510;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__40515_40519 = cljs.core.seq(domina.nodes(content));var chunk__40516_40520 = null;var count__40517_40521 = 0;var i__40518_40522 = 0;while(true){
if((i__40518_40522 < count__40517_40521))
{var node_40523 = chunk__40516_40520.cljs$core$IIndexed$_nth$arity$2(null,i__40518_40522);goog.dom.forms.setValue(node_40523,value);
{
var G__40524 = seq__40515_40519;
var G__40525 = chunk__40516_40520;
var G__40526 = count__40517_40521;
var G__40527 = (i__40518_40522 + 1);
seq__40515_40519 = G__40524;
chunk__40516_40520 = G__40525;
count__40517_40521 = G__40526;
i__40518_40522 = G__40527;
continue;
}
} else
{var temp__4126__auto___40528 = cljs.core.seq(seq__40515_40519);if(temp__4126__auto___40528)
{var seq__40515_40529__$1 = temp__4126__auto___40528;if(cljs.core.chunked_seq_QMARK_(seq__40515_40529__$1))
{var c__4295__auto___40530 = cljs.core.chunk_first(seq__40515_40529__$1);{
var G__40531 = cljs.core.chunk_rest(seq__40515_40529__$1);
var G__40532 = c__4295__auto___40530;
var G__40533 = cljs.core.count(c__4295__auto___40530);
var G__40534 = 0;
seq__40515_40519 = G__40531;
chunk__40516_40520 = G__40532;
count__40517_40521 = G__40533;
i__40518_40522 = G__40534;
continue;
}
} else
{var node_40535 = cljs.core.first(seq__40515_40529__$1);goog.dom.forms.setValue(node_40535,value);
{
var G__40536 = cljs.core.next(seq__40515_40529__$1);
var G__40537 = null;
var G__40538 = 0;
var G__40539 = 0;
seq__40515_40519 = G__40536;
chunk__40516_40520 = G__40537;
count__40517_40521 = G__40538;
i__40518_40522 = G__40539;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3527__auto__ = allows_inner_html_QMARK_;if(and__3527__auto__)
{var and__3527__auto____$1 = (function (){var or__3539__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3527__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3527__auto____$1;
}
} else
{return and__3527__auto__;
}
})()))
{var value_40550 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__40546_40551 = cljs.core.seq(domina.nodes(content));var chunk__40547_40552 = null;var count__40548_40553 = 0;var i__40549_40554 = 0;while(true){
if((i__40549_40554 < count__40548_40553))
{var node_40555 = chunk__40547_40552.cljs$core$IIndexed$_nth$arity$2(null,i__40549_40554);node_40555.innerHTML = value_40550;
{
var G__40556 = seq__40546_40551;
var G__40557 = chunk__40547_40552;
var G__40558 = count__40548_40553;
var G__40559 = (i__40549_40554 + 1);
seq__40546_40551 = G__40556;
chunk__40547_40552 = G__40557;
count__40548_40553 = G__40558;
i__40549_40554 = G__40559;
continue;
}
} else
{var temp__4126__auto___40560 = cljs.core.seq(seq__40546_40551);if(temp__4126__auto___40560)
{var seq__40546_40561__$1 = temp__4126__auto___40560;if(cljs.core.chunked_seq_QMARK_(seq__40546_40561__$1))
{var c__4295__auto___40562 = cljs.core.chunk_first(seq__40546_40561__$1);{
var G__40563 = cljs.core.chunk_rest(seq__40546_40561__$1);
var G__40564 = c__4295__auto___40562;
var G__40565 = cljs.core.count(c__4295__auto___40562);
var G__40566 = 0;
seq__40546_40551 = G__40563;
chunk__40547_40552 = G__40564;
count__40548_40553 = G__40565;
i__40549_40554 = G__40566;
continue;
}
} else
{var node_40567 = cljs.core.first(seq__40546_40561__$1);node_40567.innerHTML = value_40550;
{
var G__40568 = cljs.core.next(seq__40546_40561__$1);
var G__40569 = null;
var G__40570 = 0;
var G__40571 = 0;
seq__40546_40551 = G__40568;
chunk__40547_40552 = G__40569;
count__40548_40553 = G__40570;
i__40549_40554 = G__40571;
continue;
}
}
} else
{}
}
break;
}
}catch (e40545){if((e40545 instanceof Error))
{var e_40572 = e40545;domina.replace_children_BANG_(content,value_40550);
} else
{if(cljs.core.constant$keyword$578)
{throw e40545;
} else
{}
}
}} else
{domina.replace_children_BANG_(content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_(content,inner_content);
} else
{return domina.replace_children_BANG_(content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3527__auto__ = bubble;if(cljs.core.truth_(and__3527__auto__))
{return (value == null);
} else
{return and__3527__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node(node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3539__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__40579_40583 = cljs.core.seq(children);var chunk__40580_40584 = null;var count__40581_40585 = 0;var i__40582_40586 = 0;while(true){
if((i__40582_40586 < count__40581_40585))
{var child_40587 = chunk__40580_40584.cljs$core$IIndexed$_nth$arity$2(null,i__40582_40586);frag.appendChild(child_40587);
{
var G__40588 = seq__40579_40583;
var G__40589 = chunk__40580_40584;
var G__40590 = count__40581_40585;
var G__40591 = (i__40582_40586 + 1);
seq__40579_40583 = G__40588;
chunk__40580_40584 = G__40589;
count__40581_40585 = G__40590;
i__40582_40586 = G__40591;
continue;
}
} else
{var temp__4126__auto___40592 = cljs.core.seq(seq__40579_40583);if(temp__4126__auto___40592)
{var seq__40579_40593__$1 = temp__4126__auto___40592;if(cljs.core.chunked_seq_QMARK_(seq__40579_40593__$1))
{var c__4295__auto___40594 = cljs.core.chunk_first(seq__40579_40593__$1);{
var G__40595 = cljs.core.chunk_rest(seq__40579_40593__$1);
var G__40596 = c__4295__auto___40594;
var G__40597 = cljs.core.count(c__4295__auto___40594);
var G__40598 = 0;
seq__40579_40583 = G__40595;
chunk__40580_40584 = G__40596;
count__40581_40585 = G__40597;
i__40582_40586 = G__40598;
continue;
}
} else
{var child_40599 = cljs.core.first(seq__40579_40593__$1);frag.appendChild(child_40599);
{
var G__40600 = cljs.core.next(seq__40579_40593__$1);
var G__40601 = null;
var G__40602 = 0;
var G__40603 = 0;
seq__40579_40583 = G__40600;
chunk__40580_40584 = G__40601;
count__40581_40585 = G__40602;
i__40582_40586 = G__40603;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (parents,children,first_child,other_children){
return (function (p1__40573_SHARP_,p2__40574_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__40573_SHARP_,p2__40574_SHARP_) : f.call(null,p1__40573_SHARP_,p2__40574_SHARP_));
});})(parents,children,first_child,other_children))
,cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1(nl);
} else
{return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3527__auto__ = obj;if(cljs.core.truth_(and__3527__auto__))
{var and__3527__auto____$1 = cljs.core.not(obj.nodeName);if(and__3527__auto____$1)
{return obj.length;
} else
{return and__3527__auto____$1;
}
} else
{return and__3527__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__40605 = list_thing;if(G__40605)
{var bit__4189__auto__ = (G__40605.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__40605.cljs$core$ISeqable$))
{return true;
} else
{if((!G__40605.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__40605);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__40605);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$579)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__40606 = content;if(G__40606)
{var bit__4189__auto__ = (G__40606.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__40606.cljs$core$ISeqable$))
{return true;
} else
{if((!G__40606.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__40606);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__40606);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$579)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__40607 = content;if(G__40607)
{var bit__4189__auto__ = (G__40607.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__40607.cljs$core$ISeqable$))
{return true;
} else
{if((!G__40607.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__40607);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__40607);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$579)
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.nodes(domina.string_to_dom(s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node(domina.string_to_dom(s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist(coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
