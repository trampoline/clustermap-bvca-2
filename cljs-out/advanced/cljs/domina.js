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
var opt_wrapper_40136 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_40137 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_40138 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$581,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_40138,opt_wrapper_40136,table_section_wrapper_40137,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),opt_wrapper_40136,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),table_section_wrapper_40137,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_40137,cell_wrapper_40138,table_section_wrapper_40137,table_section_wrapper_40137]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3529__auto__ = div.firstChild;if(cljs.core.truth_(and__3529__auto__))
{return div.firstChild.childNodes;
} else
{return and__3529__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__40143 = cljs.core.seq(tbody);var chunk__40144 = null;var count__40145 = 0;var i__40146 = 0;while(true){
if((i__40146 < count__40145))
{var child = chunk__40144.cljs$core$IIndexed$_nth$arity$2(null,i__40146);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__40147 = seq__40143;
var G__40148 = chunk__40144;
var G__40149 = count__40145;
var G__40150 = (i__40146 + 1);
seq__40143 = G__40147;
chunk__40144 = G__40148;
count__40145 = G__40149;
i__40146 = G__40150;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__40143);if(temp__4126__auto__)
{var seq__40143__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__40143__$1))
{var c__4297__auto__ = cljs.core.chunk_first(seq__40143__$1);{
var G__40151 = cljs.core.chunk_rest(seq__40143__$1);
var G__40152 = c__4297__auto__;
var G__40153 = cljs.core.count(c__4297__auto__);
var G__40154 = 0;
seq__40143 = G__40151;
chunk__40144 = G__40152;
count__40145 = G__40153;
i__40146 = G__40154;
continue;
}
} else
{var child = cljs.core.first(seq__40143__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__40155 = cljs.core.next(seq__40143__$1);
var G__40156 = null;
var G__40157 = 0;
var G__40158 = 0;
seq__40143 = G__40155;
chunk__40144 = G__40156;
count__40145 = G__40157;
i__40146 = G__40158;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))).toLowerCase();var vec__40160 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$581.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40160,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40160,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40160,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__40161 = wrapper.lastChild;
var G__40162 = (level - 1);
wrapper = G__40161;
level = G__40162;
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
if(cljs.core.truth_((function (){var and__3529__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3529__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3529__auto__;
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
domina.DomContent = (function (){var obj40164 = {};return obj40164;
})();
domina.nodes = (function nodes(content){if((function (){var and__3529__auto__ = content;if(and__3529__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3529__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4168__auto__ = (((content == null))?null:content);return (function (){var or__3541__auto__ = (domina.nodes[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.nodes["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3529__auto__ = nodeseq;if(and__3529__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3529__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4168__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3541__auto__ = (domina.single_node[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.single_node["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3529__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3529__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3529__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__40165){
var mesg = cljs.core.seq(arglist__40165);
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
log.cljs$lang$applyTo = (function (arglist__40166){
var mesg = cljs.core.seq(arglist__40166);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__40167){
var contents = cljs.core.seq(arglist__40167);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40168_SHARP_){return p1__40168_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__40169_SHARP_,p2__40170_SHARP_){return goog.dom.insertChildAt(p1__40169_SHARP_,p2__40170_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__40169_SHARP_,p2__40170_SHARP_){return goog.dom.insertChildAt(p1__40169_SHARP_,p2__40170_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__40172_SHARP_,p2__40171_SHARP_){return goog.dom.insertSiblingBefore(p2__40171_SHARP_,p1__40172_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__40172_SHARP_,p2__40171_SHARP_){return goog.dom.insertSiblingBefore(p2__40171_SHARP_,p1__40172_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__40174_SHARP_,p2__40173_SHARP_){return goog.dom.insertSiblingAfter(p2__40173_SHARP_,p1__40174_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__40174_SHARP_,p2__40173_SHARP_){return goog.dom.insertSiblingAfter(p2__40173_SHARP_,p1__40174_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__40176_SHARP_,p2__40175_SHARP_){return goog.dom.replaceNode(p2__40175_SHARP_,p1__40176_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__40176_SHARP_,p2__40175_SHARP_){return goog.dom.replaceNode(p2__40175_SHARP_,p1__40176_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__40181_40185 = cljs.core.seq(domina.nodes(content));var chunk__40182_40186 = null;var count__40183_40187 = 0;var i__40184_40188 = 0;while(true){
if((i__40184_40188 < count__40183_40187))
{var n_40189 = chunk__40182_40186.cljs$core$IIndexed$_nth$arity$2(null,i__40184_40188);goog.style.setStyle(n_40189,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__40190 = seq__40181_40185;
var G__40191 = chunk__40182_40186;
var G__40192 = count__40183_40187;
var G__40193 = (i__40184_40188 + 1);
seq__40181_40185 = G__40190;
chunk__40182_40186 = G__40191;
count__40183_40187 = G__40192;
i__40184_40188 = G__40193;
continue;
}
} else
{var temp__4126__auto___40194 = cljs.core.seq(seq__40181_40185);if(temp__4126__auto___40194)
{var seq__40181_40195__$1 = temp__4126__auto___40194;if(cljs.core.chunked_seq_QMARK_(seq__40181_40195__$1))
{var c__4297__auto___40196 = cljs.core.chunk_first(seq__40181_40195__$1);{
var G__40197 = cljs.core.chunk_rest(seq__40181_40195__$1);
var G__40198 = c__4297__auto___40196;
var G__40199 = cljs.core.count(c__4297__auto___40196);
var G__40200 = 0;
seq__40181_40185 = G__40197;
chunk__40182_40186 = G__40198;
count__40183_40187 = G__40199;
i__40184_40188 = G__40200;
continue;
}
} else
{var n_40201 = cljs.core.first(seq__40181_40195__$1);goog.style.setStyle(n_40201,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__40202 = cljs.core.next(seq__40181_40195__$1);
var G__40203 = null;
var G__40204 = 0;
var G__40205 = 0;
seq__40181_40185 = G__40202;
chunk__40182_40186 = G__40203;
count__40183_40187 = G__40204;
i__40184_40188 = G__40205;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__40206){
var content = cljs.core.first(arglist__40206);
arglist__40206 = cljs.core.next(arglist__40206);
var name = cljs.core.first(arglist__40206);
var value = cljs.core.rest(arglist__40206);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__40211_40215 = cljs.core.seq(domina.nodes(content));var chunk__40212_40216 = null;var count__40213_40217 = 0;var i__40214_40218 = 0;while(true){
if((i__40214_40218 < count__40213_40217))
{var n_40219 = chunk__40212_40216.cljs$core$IIndexed$_nth$arity$2(null,i__40214_40218);n_40219.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__40220 = seq__40211_40215;
var G__40221 = chunk__40212_40216;
var G__40222 = count__40213_40217;
var G__40223 = (i__40214_40218 + 1);
seq__40211_40215 = G__40220;
chunk__40212_40216 = G__40221;
count__40213_40217 = G__40222;
i__40214_40218 = G__40223;
continue;
}
} else
{var temp__4126__auto___40224 = cljs.core.seq(seq__40211_40215);if(temp__4126__auto___40224)
{var seq__40211_40225__$1 = temp__4126__auto___40224;if(cljs.core.chunked_seq_QMARK_(seq__40211_40225__$1))
{var c__4297__auto___40226 = cljs.core.chunk_first(seq__40211_40225__$1);{
var G__40227 = cljs.core.chunk_rest(seq__40211_40225__$1);
var G__40228 = c__4297__auto___40226;
var G__40229 = cljs.core.count(c__4297__auto___40226);
var G__40230 = 0;
seq__40211_40215 = G__40227;
chunk__40212_40216 = G__40228;
count__40213_40217 = G__40229;
i__40214_40218 = G__40230;
continue;
}
} else
{var n_40231 = cljs.core.first(seq__40211_40225__$1);n_40231.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__40232 = cljs.core.next(seq__40211_40225__$1);
var G__40233 = null;
var G__40234 = 0;
var G__40235 = 0;
seq__40211_40215 = G__40232;
chunk__40212_40216 = G__40233;
count__40213_40217 = G__40234;
i__40214_40218 = G__40235;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__40236){
var content = cljs.core.first(arglist__40236);
arglist__40236 = cljs.core.next(arglist__40236);
var name = cljs.core.first(arglist__40236);
var value = cljs.core.rest(arglist__40236);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__40241_40245 = cljs.core.seq(domina.nodes(content));var chunk__40242_40246 = null;var count__40243_40247 = 0;var i__40244_40248 = 0;while(true){
if((i__40244_40248 < count__40243_40247))
{var n_40249 = chunk__40242_40246.cljs$core$IIndexed$_nth$arity$2(null,i__40244_40248);n_40249.removeAttribute(cljs.core.name(name));
{
var G__40250 = seq__40241_40245;
var G__40251 = chunk__40242_40246;
var G__40252 = count__40243_40247;
var G__40253 = (i__40244_40248 + 1);
seq__40241_40245 = G__40250;
chunk__40242_40246 = G__40251;
count__40243_40247 = G__40252;
i__40244_40248 = G__40253;
continue;
}
} else
{var temp__4126__auto___40254 = cljs.core.seq(seq__40241_40245);if(temp__4126__auto___40254)
{var seq__40241_40255__$1 = temp__4126__auto___40254;if(cljs.core.chunked_seq_QMARK_(seq__40241_40255__$1))
{var c__4297__auto___40256 = cljs.core.chunk_first(seq__40241_40255__$1);{
var G__40257 = cljs.core.chunk_rest(seq__40241_40255__$1);
var G__40258 = c__4297__auto___40256;
var G__40259 = cljs.core.count(c__4297__auto___40256);
var G__40260 = 0;
seq__40241_40245 = G__40257;
chunk__40242_40246 = G__40258;
count__40243_40247 = G__40259;
i__40244_40248 = G__40260;
continue;
}
} else
{var n_40261 = cljs.core.first(seq__40241_40255__$1);n_40261.removeAttribute(cljs.core.name(name));
{
var G__40262 = cljs.core.next(seq__40241_40255__$1);
var G__40263 = null;
var G__40264 = 0;
var G__40265 = 0;
seq__40241_40245 = G__40262;
chunk__40242_40246 = G__40263;
count__40243_40247 = G__40264;
i__40244_40248 = G__40265;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__40267 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40267,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40267,1,null);if(cljs.core.truth_((function (){var and__3529__auto__ = k;if(cljs.core.truth_(and__3529__auto__))
{return v;
} else
{return and__3529__auto__;
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
{if(cljs.core.constant$keyword$580)
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
return (function (p1__40268_SHARP_){var attr = attrs__$1.item(p1__40268_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__40275_40281 = cljs.core.seq(styles);var chunk__40276_40282 = null;var count__40277_40283 = 0;var i__40278_40284 = 0;while(true){
if((i__40278_40284 < count__40277_40283))
{var vec__40279_40285 = chunk__40276_40282.cljs$core$IIndexed$_nth$arity$2(null,i__40278_40284);var name_40286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40279_40285,0,null);var value_40287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40279_40285,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_40286,cljs.core.array_seq([value_40287], 0));
{
var G__40288 = seq__40275_40281;
var G__40289 = chunk__40276_40282;
var G__40290 = count__40277_40283;
var G__40291 = (i__40278_40284 + 1);
seq__40275_40281 = G__40288;
chunk__40276_40282 = G__40289;
count__40277_40283 = G__40290;
i__40278_40284 = G__40291;
continue;
}
} else
{var temp__4126__auto___40292 = cljs.core.seq(seq__40275_40281);if(temp__4126__auto___40292)
{var seq__40275_40293__$1 = temp__4126__auto___40292;if(cljs.core.chunked_seq_QMARK_(seq__40275_40293__$1))
{var c__4297__auto___40294 = cljs.core.chunk_first(seq__40275_40293__$1);{
var G__40295 = cljs.core.chunk_rest(seq__40275_40293__$1);
var G__40296 = c__4297__auto___40294;
var G__40297 = cljs.core.count(c__4297__auto___40294);
var G__40298 = 0;
seq__40275_40281 = G__40295;
chunk__40276_40282 = G__40296;
count__40277_40283 = G__40297;
i__40278_40284 = G__40298;
continue;
}
} else
{var vec__40280_40299 = cljs.core.first(seq__40275_40293__$1);var name_40300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40280_40299,0,null);var value_40301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40280_40299,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_40300,cljs.core.array_seq([value_40301], 0));
{
var G__40302 = cljs.core.next(seq__40275_40293__$1);
var G__40303 = null;
var G__40304 = 0;
var G__40305 = 0;
seq__40275_40281 = G__40302;
chunk__40276_40282 = G__40303;
count__40277_40283 = G__40304;
i__40278_40284 = G__40305;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__40312_40318 = cljs.core.seq(attrs);var chunk__40313_40319 = null;var count__40314_40320 = 0;var i__40315_40321 = 0;while(true){
if((i__40315_40321 < count__40314_40320))
{var vec__40316_40322 = chunk__40313_40319.cljs$core$IIndexed$_nth$arity$2(null,i__40315_40321);var name_40323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40316_40322,0,null);var value_40324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40316_40322,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_40323,cljs.core.array_seq([value_40324], 0));
{
var G__40325 = seq__40312_40318;
var G__40326 = chunk__40313_40319;
var G__40327 = count__40314_40320;
var G__40328 = (i__40315_40321 + 1);
seq__40312_40318 = G__40325;
chunk__40313_40319 = G__40326;
count__40314_40320 = G__40327;
i__40315_40321 = G__40328;
continue;
}
} else
{var temp__4126__auto___40329 = cljs.core.seq(seq__40312_40318);if(temp__4126__auto___40329)
{var seq__40312_40330__$1 = temp__4126__auto___40329;if(cljs.core.chunked_seq_QMARK_(seq__40312_40330__$1))
{var c__4297__auto___40331 = cljs.core.chunk_first(seq__40312_40330__$1);{
var G__40332 = cljs.core.chunk_rest(seq__40312_40330__$1);
var G__40333 = c__4297__auto___40331;
var G__40334 = cljs.core.count(c__4297__auto___40331);
var G__40335 = 0;
seq__40312_40318 = G__40332;
chunk__40313_40319 = G__40333;
count__40314_40320 = G__40334;
i__40315_40321 = G__40335;
continue;
}
} else
{var vec__40317_40336 = cljs.core.first(seq__40312_40330__$1);var name_40337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40317_40336,0,null);var value_40338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40317_40336,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_40337,cljs.core.array_seq([value_40338], 0));
{
var G__40339 = cljs.core.next(seq__40312_40330__$1);
var G__40340 = null;
var G__40341 = 0;
var G__40342 = 0;
seq__40312_40318 = G__40339;
chunk__40313_40319 = G__40340;
count__40314_40320 = G__40341;
i__40315_40321 = G__40342;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__40347_40351 = cljs.core.seq(domina.nodes(content));var chunk__40348_40352 = null;var count__40349_40353 = 0;var i__40350_40354 = 0;while(true){
if((i__40350_40354 < count__40349_40353))
{var node_40355 = chunk__40348_40352.cljs$core$IIndexed$_nth$arity$2(null,i__40350_40354);goog.dom.classes.add(node_40355,class$);
{
var G__40356 = seq__40347_40351;
var G__40357 = chunk__40348_40352;
var G__40358 = count__40349_40353;
var G__40359 = (i__40350_40354 + 1);
seq__40347_40351 = G__40356;
chunk__40348_40352 = G__40357;
count__40349_40353 = G__40358;
i__40350_40354 = G__40359;
continue;
}
} else
{var temp__4126__auto___40360 = cljs.core.seq(seq__40347_40351);if(temp__4126__auto___40360)
{var seq__40347_40361__$1 = temp__4126__auto___40360;if(cljs.core.chunked_seq_QMARK_(seq__40347_40361__$1))
{var c__4297__auto___40362 = cljs.core.chunk_first(seq__40347_40361__$1);{
var G__40363 = cljs.core.chunk_rest(seq__40347_40361__$1);
var G__40364 = c__4297__auto___40362;
var G__40365 = cljs.core.count(c__4297__auto___40362);
var G__40366 = 0;
seq__40347_40351 = G__40363;
chunk__40348_40352 = G__40364;
count__40349_40353 = G__40365;
i__40350_40354 = G__40366;
continue;
}
} else
{var node_40367 = cljs.core.first(seq__40347_40361__$1);goog.dom.classes.add(node_40367,class$);
{
var G__40368 = cljs.core.next(seq__40347_40361__$1);
var G__40369 = null;
var G__40370 = 0;
var G__40371 = 0;
seq__40347_40351 = G__40368;
chunk__40348_40352 = G__40369;
count__40349_40353 = G__40370;
i__40350_40354 = G__40371;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__40376_40380 = cljs.core.seq(domina.nodes(content));var chunk__40377_40381 = null;var count__40378_40382 = 0;var i__40379_40383 = 0;while(true){
if((i__40379_40383 < count__40378_40382))
{var node_40384 = chunk__40377_40381.cljs$core$IIndexed$_nth$arity$2(null,i__40379_40383);goog.dom.classes.remove(node_40384,class$);
{
var G__40385 = seq__40376_40380;
var G__40386 = chunk__40377_40381;
var G__40387 = count__40378_40382;
var G__40388 = (i__40379_40383 + 1);
seq__40376_40380 = G__40385;
chunk__40377_40381 = G__40386;
count__40378_40382 = G__40387;
i__40379_40383 = G__40388;
continue;
}
} else
{var temp__4126__auto___40389 = cljs.core.seq(seq__40376_40380);if(temp__4126__auto___40389)
{var seq__40376_40390__$1 = temp__4126__auto___40389;if(cljs.core.chunked_seq_QMARK_(seq__40376_40390__$1))
{var c__4297__auto___40391 = cljs.core.chunk_first(seq__40376_40390__$1);{
var G__40392 = cljs.core.chunk_rest(seq__40376_40390__$1);
var G__40393 = c__4297__auto___40391;
var G__40394 = cljs.core.count(c__4297__auto___40391);
var G__40395 = 0;
seq__40376_40380 = G__40392;
chunk__40377_40381 = G__40393;
count__40378_40382 = G__40394;
i__40379_40383 = G__40395;
continue;
}
} else
{var node_40396 = cljs.core.first(seq__40376_40390__$1);goog.dom.classes.remove(node_40396,class$);
{
var G__40397 = cljs.core.next(seq__40376_40390__$1);
var G__40398 = null;
var G__40399 = 0;
var G__40400 = 0;
seq__40376_40380 = G__40397;
chunk__40377_40381 = G__40398;
count__40378_40382 = G__40399;
i__40379_40383 = G__40400;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__40405_40409 = cljs.core.seq(domina.nodes(content));var chunk__40406_40410 = null;var count__40407_40411 = 0;var i__40408_40412 = 0;while(true){
if((i__40408_40412 < count__40407_40411))
{var node_40413 = chunk__40406_40410.cljs$core$IIndexed$_nth$arity$2(null,i__40408_40412);goog.dom.classes.toggle(node_40413,class$);
{
var G__40414 = seq__40405_40409;
var G__40415 = chunk__40406_40410;
var G__40416 = count__40407_40411;
var G__40417 = (i__40408_40412 + 1);
seq__40405_40409 = G__40414;
chunk__40406_40410 = G__40415;
count__40407_40411 = G__40416;
i__40408_40412 = G__40417;
continue;
}
} else
{var temp__4126__auto___40418 = cljs.core.seq(seq__40405_40409);if(temp__4126__auto___40418)
{var seq__40405_40419__$1 = temp__4126__auto___40418;if(cljs.core.chunked_seq_QMARK_(seq__40405_40419__$1))
{var c__4297__auto___40420 = cljs.core.chunk_first(seq__40405_40419__$1);{
var G__40421 = cljs.core.chunk_rest(seq__40405_40419__$1);
var G__40422 = c__4297__auto___40420;
var G__40423 = cljs.core.count(c__4297__auto___40420);
var G__40424 = 0;
seq__40405_40409 = G__40421;
chunk__40406_40410 = G__40422;
count__40407_40411 = G__40423;
i__40408_40412 = G__40424;
continue;
}
} else
{var node_40425 = cljs.core.first(seq__40405_40419__$1);goog.dom.classes.toggle(node_40425,class$);
{
var G__40426 = cljs.core.next(seq__40405_40419__$1);
var G__40427 = null;
var G__40428 = 0;
var G__40429 = 0;
seq__40405_40409 = G__40426;
chunk__40406_40410 = G__40427;
count__40407_40411 = G__40428;
i__40408_40412 = G__40429;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_40438__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__40434_40439 = cljs.core.seq(domina.nodes(content));var chunk__40435_40440 = null;var count__40436_40441 = 0;var i__40437_40442 = 0;while(true){
if((i__40437_40442 < count__40436_40441))
{var node_40443 = chunk__40435_40440.cljs$core$IIndexed$_nth$arity$2(null,i__40437_40442);goog.dom.classes.set(node_40443,classes_40438__$1);
{
var G__40444 = seq__40434_40439;
var G__40445 = chunk__40435_40440;
var G__40446 = count__40436_40441;
var G__40447 = (i__40437_40442 + 1);
seq__40434_40439 = G__40444;
chunk__40435_40440 = G__40445;
count__40436_40441 = G__40446;
i__40437_40442 = G__40447;
continue;
}
} else
{var temp__4126__auto___40448 = cljs.core.seq(seq__40434_40439);if(temp__4126__auto___40448)
{var seq__40434_40449__$1 = temp__4126__auto___40448;if(cljs.core.chunked_seq_QMARK_(seq__40434_40449__$1))
{var c__4297__auto___40450 = cljs.core.chunk_first(seq__40434_40449__$1);{
var G__40451 = cljs.core.chunk_rest(seq__40434_40449__$1);
var G__40452 = c__4297__auto___40450;
var G__40453 = cljs.core.count(c__4297__auto___40450);
var G__40454 = 0;
seq__40434_40439 = G__40451;
chunk__40435_40440 = G__40452;
count__40436_40441 = G__40453;
i__40437_40442 = G__40454;
continue;
}
} else
{var node_40455 = cljs.core.first(seq__40434_40449__$1);goog.dom.classes.set(node_40455,classes_40438__$1);
{
var G__40456 = cljs.core.next(seq__40434_40449__$1);
var G__40457 = null;
var G__40458 = 0;
var G__40459 = 0;
seq__40434_40439 = G__40456;
chunk__40435_40440 = G__40457;
count__40436_40441 = G__40458;
i__40437_40442 = G__40459;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__40464_40468 = cljs.core.seq(domina.nodes(content));var chunk__40465_40469 = null;var count__40466_40470 = 0;var i__40467_40471 = 0;while(true){
if((i__40467_40471 < count__40466_40470))
{var node_40472 = chunk__40465_40469.cljs$core$IIndexed$_nth$arity$2(null,i__40467_40471);goog.dom.setTextContent(node_40472,value);
{
var G__40473 = seq__40464_40468;
var G__40474 = chunk__40465_40469;
var G__40475 = count__40466_40470;
var G__40476 = (i__40467_40471 + 1);
seq__40464_40468 = G__40473;
chunk__40465_40469 = G__40474;
count__40466_40470 = G__40475;
i__40467_40471 = G__40476;
continue;
}
} else
{var temp__4126__auto___40477 = cljs.core.seq(seq__40464_40468);if(temp__4126__auto___40477)
{var seq__40464_40478__$1 = temp__4126__auto___40477;if(cljs.core.chunked_seq_QMARK_(seq__40464_40478__$1))
{var c__4297__auto___40479 = cljs.core.chunk_first(seq__40464_40478__$1);{
var G__40480 = cljs.core.chunk_rest(seq__40464_40478__$1);
var G__40481 = c__4297__auto___40479;
var G__40482 = cljs.core.count(c__4297__auto___40479);
var G__40483 = 0;
seq__40464_40468 = G__40480;
chunk__40465_40469 = G__40481;
count__40466_40470 = G__40482;
i__40467_40471 = G__40483;
continue;
}
} else
{var node_40484 = cljs.core.first(seq__40464_40478__$1);goog.dom.setTextContent(node_40484,value);
{
var G__40485 = cljs.core.next(seq__40464_40478__$1);
var G__40486 = null;
var G__40487 = 0;
var G__40488 = 0;
seq__40464_40468 = G__40485;
chunk__40465_40469 = G__40486;
count__40466_40470 = G__40487;
i__40467_40471 = G__40488;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__40493_40497 = cljs.core.seq(domina.nodes(content));var chunk__40494_40498 = null;var count__40495_40499 = 0;var i__40496_40500 = 0;while(true){
if((i__40496_40500 < count__40495_40499))
{var node_40501 = chunk__40494_40498.cljs$core$IIndexed$_nth$arity$2(null,i__40496_40500);goog.dom.forms.setValue(node_40501,value);
{
var G__40502 = seq__40493_40497;
var G__40503 = chunk__40494_40498;
var G__40504 = count__40495_40499;
var G__40505 = (i__40496_40500 + 1);
seq__40493_40497 = G__40502;
chunk__40494_40498 = G__40503;
count__40495_40499 = G__40504;
i__40496_40500 = G__40505;
continue;
}
} else
{var temp__4126__auto___40506 = cljs.core.seq(seq__40493_40497);if(temp__4126__auto___40506)
{var seq__40493_40507__$1 = temp__4126__auto___40506;if(cljs.core.chunked_seq_QMARK_(seq__40493_40507__$1))
{var c__4297__auto___40508 = cljs.core.chunk_first(seq__40493_40507__$1);{
var G__40509 = cljs.core.chunk_rest(seq__40493_40507__$1);
var G__40510 = c__4297__auto___40508;
var G__40511 = cljs.core.count(c__4297__auto___40508);
var G__40512 = 0;
seq__40493_40497 = G__40509;
chunk__40494_40498 = G__40510;
count__40495_40499 = G__40511;
i__40496_40500 = G__40512;
continue;
}
} else
{var node_40513 = cljs.core.first(seq__40493_40507__$1);goog.dom.forms.setValue(node_40513,value);
{
var G__40514 = cljs.core.next(seq__40493_40507__$1);
var G__40515 = null;
var G__40516 = 0;
var G__40517 = 0;
seq__40493_40497 = G__40514;
chunk__40494_40498 = G__40515;
count__40495_40499 = G__40516;
i__40496_40500 = G__40517;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3529__auto__ = allows_inner_html_QMARK_;if(and__3529__auto__)
{var and__3529__auto____$1 = (function (){var or__3541__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3529__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
}
})()))
{var value_40528 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__40524_40529 = cljs.core.seq(domina.nodes(content));var chunk__40525_40530 = null;var count__40526_40531 = 0;var i__40527_40532 = 0;while(true){
if((i__40527_40532 < count__40526_40531))
{var node_40533 = chunk__40525_40530.cljs$core$IIndexed$_nth$arity$2(null,i__40527_40532);node_40533.innerHTML = value_40528;
{
var G__40534 = seq__40524_40529;
var G__40535 = chunk__40525_40530;
var G__40536 = count__40526_40531;
var G__40537 = (i__40527_40532 + 1);
seq__40524_40529 = G__40534;
chunk__40525_40530 = G__40535;
count__40526_40531 = G__40536;
i__40527_40532 = G__40537;
continue;
}
} else
{var temp__4126__auto___40538 = cljs.core.seq(seq__40524_40529);if(temp__4126__auto___40538)
{var seq__40524_40539__$1 = temp__4126__auto___40538;if(cljs.core.chunked_seq_QMARK_(seq__40524_40539__$1))
{var c__4297__auto___40540 = cljs.core.chunk_first(seq__40524_40539__$1);{
var G__40541 = cljs.core.chunk_rest(seq__40524_40539__$1);
var G__40542 = c__4297__auto___40540;
var G__40543 = cljs.core.count(c__4297__auto___40540);
var G__40544 = 0;
seq__40524_40529 = G__40541;
chunk__40525_40530 = G__40542;
count__40526_40531 = G__40543;
i__40527_40532 = G__40544;
continue;
}
} else
{var node_40545 = cljs.core.first(seq__40524_40539__$1);node_40545.innerHTML = value_40528;
{
var G__40546 = cljs.core.next(seq__40524_40539__$1);
var G__40547 = null;
var G__40548 = 0;
var G__40549 = 0;
seq__40524_40529 = G__40546;
chunk__40525_40530 = G__40547;
count__40526_40531 = G__40548;
i__40527_40532 = G__40549;
continue;
}
}
} else
{}
}
break;
}
}catch (e40523){if((e40523 instanceof Error))
{var e_40550 = e40523;domina.replace_children_BANG_(content,value_40528);
} else
{if(cljs.core.constant$keyword$580)
{throw e40523;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3529__auto__ = bubble;if(cljs.core.truth_(and__3529__auto__))
{return (value == null);
} else
{return and__3529__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3541__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__40557_40561 = cljs.core.seq(children);var chunk__40558_40562 = null;var count__40559_40563 = 0;var i__40560_40564 = 0;while(true){
if((i__40560_40564 < count__40559_40563))
{var child_40565 = chunk__40558_40562.cljs$core$IIndexed$_nth$arity$2(null,i__40560_40564);frag.appendChild(child_40565);
{
var G__40566 = seq__40557_40561;
var G__40567 = chunk__40558_40562;
var G__40568 = count__40559_40563;
var G__40569 = (i__40560_40564 + 1);
seq__40557_40561 = G__40566;
chunk__40558_40562 = G__40567;
count__40559_40563 = G__40568;
i__40560_40564 = G__40569;
continue;
}
} else
{var temp__4126__auto___40570 = cljs.core.seq(seq__40557_40561);if(temp__4126__auto___40570)
{var seq__40557_40571__$1 = temp__4126__auto___40570;if(cljs.core.chunked_seq_QMARK_(seq__40557_40571__$1))
{var c__4297__auto___40572 = cljs.core.chunk_first(seq__40557_40571__$1);{
var G__40573 = cljs.core.chunk_rest(seq__40557_40571__$1);
var G__40574 = c__4297__auto___40572;
var G__40575 = cljs.core.count(c__4297__auto___40572);
var G__40576 = 0;
seq__40557_40561 = G__40573;
chunk__40558_40562 = G__40574;
count__40559_40563 = G__40575;
i__40560_40564 = G__40576;
continue;
}
} else
{var child_40577 = cljs.core.first(seq__40557_40571__$1);frag.appendChild(child_40577);
{
var G__40578 = cljs.core.next(seq__40557_40571__$1);
var G__40579 = null;
var G__40580 = 0;
var G__40581 = 0;
seq__40557_40561 = G__40578;
chunk__40558_40562 = G__40579;
count__40559_40563 = G__40580;
i__40560_40564 = G__40581;
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
return (function (p1__40551_SHARP_,p2__40552_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__40551_SHARP_,p2__40552_SHARP_) : f.call(null,p1__40551_SHARP_,p2__40552_SHARP_));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3529__auto__ = obj;if(cljs.core.truth_(and__3529__auto__))
{var and__3529__auto____$1 = cljs.core.not(obj.nodeName);if(and__3529__auto____$1)
{return obj.length;
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
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
{if((function (){var G__40583 = list_thing;if(G__40583)
{var bit__4191__auto__ = (G__40583.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4191__auto__) || (G__40583.cljs$core$ISeqable$))
{return true;
} else
{if((!G__40583.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__40583);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__40583);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$581)
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
{if((function (){var G__40584 = content;if(G__40584)
{var bit__4191__auto__ = (G__40584.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4191__auto__) || (G__40584.cljs$core$ISeqable$))
{return true;
} else
{if((!G__40584.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__40584);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__40584);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$581)
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
{if((function (){var G__40585 = content;if(G__40585)
{var bit__4191__auto__ = (G__40585.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4191__auto__) || (G__40585.cljs$core$ISeqable$))
{return true;
} else
{if((!G__40585.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__40585);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__40585);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$581)
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
