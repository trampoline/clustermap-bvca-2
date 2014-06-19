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
var opt_wrapper_40134 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_40135 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_40136 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$581,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_40136,opt_wrapper_40134,table_section_wrapper_40135,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),opt_wrapper_40134,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),table_section_wrapper_40135,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_40135,cell_wrapper_40136,table_section_wrapper_40135,table_section_wrapper_40135]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3527__auto__ = div.firstChild;if(cljs.core.truth_(and__3527__auto__))
{return div.firstChild.childNodes;
} else
{return and__3527__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__40141 = cljs.core.seq(tbody);var chunk__40142 = null;var count__40143 = 0;var i__40144 = 0;while(true){
if((i__40144 < count__40143))
{var child = chunk__40142.cljs$core$IIndexed$_nth$arity$2(null,i__40144);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__40145 = seq__40141;
var G__40146 = chunk__40142;
var G__40147 = count__40143;
var G__40148 = (i__40144 + 1);
seq__40141 = G__40145;
chunk__40142 = G__40146;
count__40143 = G__40147;
i__40144 = G__40148;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__40141);if(temp__4126__auto__)
{var seq__40141__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__40141__$1))
{var c__4295__auto__ = cljs.core.chunk_first(seq__40141__$1);{
var G__40149 = cljs.core.chunk_rest(seq__40141__$1);
var G__40150 = c__4295__auto__;
var G__40151 = cljs.core.count(c__4295__auto__);
var G__40152 = 0;
seq__40141 = G__40149;
chunk__40142 = G__40150;
count__40143 = G__40151;
i__40144 = G__40152;
continue;
}
} else
{var child = cljs.core.first(seq__40141__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__40153 = cljs.core.next(seq__40141__$1);
var G__40154 = null;
var G__40155 = 0;
var G__40156 = 0;
seq__40141 = G__40153;
chunk__40142 = G__40154;
count__40143 = G__40155;
i__40144 = G__40156;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))).toLowerCase();var vec__40158 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$581.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40158,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40158,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40158,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__40159 = wrapper.lastChild;
var G__40160 = (level - 1);
wrapper = G__40159;
level = G__40160;
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
domina.DomContent = (function (){var obj40162 = {};return obj40162;
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
log_debug.cljs$lang$applyTo = (function (arglist__40163){
var mesg = cljs.core.seq(arglist__40163);
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
log.cljs$lang$applyTo = (function (arglist__40164){
var mesg = cljs.core.seq(arglist__40164);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__40165){
var contents = cljs.core.seq(arglist__40165);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40166_SHARP_){return p1__40166_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__40167_SHARP_,p2__40168_SHARP_){return goog.dom.insertChildAt(p1__40167_SHARP_,p2__40168_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__40167_SHARP_,p2__40168_SHARP_){return goog.dom.insertChildAt(p1__40167_SHARP_,p2__40168_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__40170_SHARP_,p2__40169_SHARP_){return goog.dom.insertSiblingBefore(p2__40169_SHARP_,p1__40170_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__40170_SHARP_,p2__40169_SHARP_){return goog.dom.insertSiblingBefore(p2__40169_SHARP_,p1__40170_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__40172_SHARP_,p2__40171_SHARP_){return goog.dom.insertSiblingAfter(p2__40171_SHARP_,p1__40172_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__40172_SHARP_,p2__40171_SHARP_){return goog.dom.insertSiblingAfter(p2__40171_SHARP_,p1__40172_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__40174_SHARP_,p2__40173_SHARP_){return goog.dom.replaceNode(p2__40173_SHARP_,p1__40174_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__40174_SHARP_,p2__40173_SHARP_){return goog.dom.replaceNode(p2__40173_SHARP_,p1__40174_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__40179_40183 = cljs.core.seq(domina.nodes(content));var chunk__40180_40184 = null;var count__40181_40185 = 0;var i__40182_40186 = 0;while(true){
if((i__40182_40186 < count__40181_40185))
{var n_40187 = chunk__40180_40184.cljs$core$IIndexed$_nth$arity$2(null,i__40182_40186);goog.style.setStyle(n_40187,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__40188 = seq__40179_40183;
var G__40189 = chunk__40180_40184;
var G__40190 = count__40181_40185;
var G__40191 = (i__40182_40186 + 1);
seq__40179_40183 = G__40188;
chunk__40180_40184 = G__40189;
count__40181_40185 = G__40190;
i__40182_40186 = G__40191;
continue;
}
} else
{var temp__4126__auto___40192 = cljs.core.seq(seq__40179_40183);if(temp__4126__auto___40192)
{var seq__40179_40193__$1 = temp__4126__auto___40192;if(cljs.core.chunked_seq_QMARK_(seq__40179_40193__$1))
{var c__4295__auto___40194 = cljs.core.chunk_first(seq__40179_40193__$1);{
var G__40195 = cljs.core.chunk_rest(seq__40179_40193__$1);
var G__40196 = c__4295__auto___40194;
var G__40197 = cljs.core.count(c__4295__auto___40194);
var G__40198 = 0;
seq__40179_40183 = G__40195;
chunk__40180_40184 = G__40196;
count__40181_40185 = G__40197;
i__40182_40186 = G__40198;
continue;
}
} else
{var n_40199 = cljs.core.first(seq__40179_40193__$1);goog.style.setStyle(n_40199,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__40200 = cljs.core.next(seq__40179_40193__$1);
var G__40201 = null;
var G__40202 = 0;
var G__40203 = 0;
seq__40179_40183 = G__40200;
chunk__40180_40184 = G__40201;
count__40181_40185 = G__40202;
i__40182_40186 = G__40203;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__40204){
var content = cljs.core.first(arglist__40204);
arglist__40204 = cljs.core.next(arglist__40204);
var name = cljs.core.first(arglist__40204);
var value = cljs.core.rest(arglist__40204);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__40209_40213 = cljs.core.seq(domina.nodes(content));var chunk__40210_40214 = null;var count__40211_40215 = 0;var i__40212_40216 = 0;while(true){
if((i__40212_40216 < count__40211_40215))
{var n_40217 = chunk__40210_40214.cljs$core$IIndexed$_nth$arity$2(null,i__40212_40216);n_40217.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__40218 = seq__40209_40213;
var G__40219 = chunk__40210_40214;
var G__40220 = count__40211_40215;
var G__40221 = (i__40212_40216 + 1);
seq__40209_40213 = G__40218;
chunk__40210_40214 = G__40219;
count__40211_40215 = G__40220;
i__40212_40216 = G__40221;
continue;
}
} else
{var temp__4126__auto___40222 = cljs.core.seq(seq__40209_40213);if(temp__4126__auto___40222)
{var seq__40209_40223__$1 = temp__4126__auto___40222;if(cljs.core.chunked_seq_QMARK_(seq__40209_40223__$1))
{var c__4295__auto___40224 = cljs.core.chunk_first(seq__40209_40223__$1);{
var G__40225 = cljs.core.chunk_rest(seq__40209_40223__$1);
var G__40226 = c__4295__auto___40224;
var G__40227 = cljs.core.count(c__4295__auto___40224);
var G__40228 = 0;
seq__40209_40213 = G__40225;
chunk__40210_40214 = G__40226;
count__40211_40215 = G__40227;
i__40212_40216 = G__40228;
continue;
}
} else
{var n_40229 = cljs.core.first(seq__40209_40223__$1);n_40229.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__40230 = cljs.core.next(seq__40209_40223__$1);
var G__40231 = null;
var G__40232 = 0;
var G__40233 = 0;
seq__40209_40213 = G__40230;
chunk__40210_40214 = G__40231;
count__40211_40215 = G__40232;
i__40212_40216 = G__40233;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__40234){
var content = cljs.core.first(arglist__40234);
arglist__40234 = cljs.core.next(arglist__40234);
var name = cljs.core.first(arglist__40234);
var value = cljs.core.rest(arglist__40234);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__40239_40243 = cljs.core.seq(domina.nodes(content));var chunk__40240_40244 = null;var count__40241_40245 = 0;var i__40242_40246 = 0;while(true){
if((i__40242_40246 < count__40241_40245))
{var n_40247 = chunk__40240_40244.cljs$core$IIndexed$_nth$arity$2(null,i__40242_40246);n_40247.removeAttribute(cljs.core.name(name));
{
var G__40248 = seq__40239_40243;
var G__40249 = chunk__40240_40244;
var G__40250 = count__40241_40245;
var G__40251 = (i__40242_40246 + 1);
seq__40239_40243 = G__40248;
chunk__40240_40244 = G__40249;
count__40241_40245 = G__40250;
i__40242_40246 = G__40251;
continue;
}
} else
{var temp__4126__auto___40252 = cljs.core.seq(seq__40239_40243);if(temp__4126__auto___40252)
{var seq__40239_40253__$1 = temp__4126__auto___40252;if(cljs.core.chunked_seq_QMARK_(seq__40239_40253__$1))
{var c__4295__auto___40254 = cljs.core.chunk_first(seq__40239_40253__$1);{
var G__40255 = cljs.core.chunk_rest(seq__40239_40253__$1);
var G__40256 = c__4295__auto___40254;
var G__40257 = cljs.core.count(c__4295__auto___40254);
var G__40258 = 0;
seq__40239_40243 = G__40255;
chunk__40240_40244 = G__40256;
count__40241_40245 = G__40257;
i__40242_40246 = G__40258;
continue;
}
} else
{var n_40259 = cljs.core.first(seq__40239_40253__$1);n_40259.removeAttribute(cljs.core.name(name));
{
var G__40260 = cljs.core.next(seq__40239_40253__$1);
var G__40261 = null;
var G__40262 = 0;
var G__40263 = 0;
seq__40239_40243 = G__40260;
chunk__40240_40244 = G__40261;
count__40241_40245 = G__40262;
i__40242_40246 = G__40263;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__40265 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40265,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40265,1,null);if(cljs.core.truth_((function (){var and__3527__auto__ = k;if(cljs.core.truth_(and__3527__auto__))
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
return (function (p1__40266_SHARP_){var attr = attrs__$1.item(p1__40266_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__40273_40279 = cljs.core.seq(styles);var chunk__40274_40280 = null;var count__40275_40281 = 0;var i__40276_40282 = 0;while(true){
if((i__40276_40282 < count__40275_40281))
{var vec__40277_40283 = chunk__40274_40280.cljs$core$IIndexed$_nth$arity$2(null,i__40276_40282);var name_40284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40277_40283,0,null);var value_40285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40277_40283,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_40284,cljs.core.array_seq([value_40285], 0));
{
var G__40286 = seq__40273_40279;
var G__40287 = chunk__40274_40280;
var G__40288 = count__40275_40281;
var G__40289 = (i__40276_40282 + 1);
seq__40273_40279 = G__40286;
chunk__40274_40280 = G__40287;
count__40275_40281 = G__40288;
i__40276_40282 = G__40289;
continue;
}
} else
{var temp__4126__auto___40290 = cljs.core.seq(seq__40273_40279);if(temp__4126__auto___40290)
{var seq__40273_40291__$1 = temp__4126__auto___40290;if(cljs.core.chunked_seq_QMARK_(seq__40273_40291__$1))
{var c__4295__auto___40292 = cljs.core.chunk_first(seq__40273_40291__$1);{
var G__40293 = cljs.core.chunk_rest(seq__40273_40291__$1);
var G__40294 = c__4295__auto___40292;
var G__40295 = cljs.core.count(c__4295__auto___40292);
var G__40296 = 0;
seq__40273_40279 = G__40293;
chunk__40274_40280 = G__40294;
count__40275_40281 = G__40295;
i__40276_40282 = G__40296;
continue;
}
} else
{var vec__40278_40297 = cljs.core.first(seq__40273_40291__$1);var name_40298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40278_40297,0,null);var value_40299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40278_40297,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_40298,cljs.core.array_seq([value_40299], 0));
{
var G__40300 = cljs.core.next(seq__40273_40291__$1);
var G__40301 = null;
var G__40302 = 0;
var G__40303 = 0;
seq__40273_40279 = G__40300;
chunk__40274_40280 = G__40301;
count__40275_40281 = G__40302;
i__40276_40282 = G__40303;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__40310_40316 = cljs.core.seq(attrs);var chunk__40311_40317 = null;var count__40312_40318 = 0;var i__40313_40319 = 0;while(true){
if((i__40313_40319 < count__40312_40318))
{var vec__40314_40320 = chunk__40311_40317.cljs$core$IIndexed$_nth$arity$2(null,i__40313_40319);var name_40321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40314_40320,0,null);var value_40322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40314_40320,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_40321,cljs.core.array_seq([value_40322], 0));
{
var G__40323 = seq__40310_40316;
var G__40324 = chunk__40311_40317;
var G__40325 = count__40312_40318;
var G__40326 = (i__40313_40319 + 1);
seq__40310_40316 = G__40323;
chunk__40311_40317 = G__40324;
count__40312_40318 = G__40325;
i__40313_40319 = G__40326;
continue;
}
} else
{var temp__4126__auto___40327 = cljs.core.seq(seq__40310_40316);if(temp__4126__auto___40327)
{var seq__40310_40328__$1 = temp__4126__auto___40327;if(cljs.core.chunked_seq_QMARK_(seq__40310_40328__$1))
{var c__4295__auto___40329 = cljs.core.chunk_first(seq__40310_40328__$1);{
var G__40330 = cljs.core.chunk_rest(seq__40310_40328__$1);
var G__40331 = c__4295__auto___40329;
var G__40332 = cljs.core.count(c__4295__auto___40329);
var G__40333 = 0;
seq__40310_40316 = G__40330;
chunk__40311_40317 = G__40331;
count__40312_40318 = G__40332;
i__40313_40319 = G__40333;
continue;
}
} else
{var vec__40315_40334 = cljs.core.first(seq__40310_40328__$1);var name_40335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40315_40334,0,null);var value_40336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40315_40334,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_40335,cljs.core.array_seq([value_40336], 0));
{
var G__40337 = cljs.core.next(seq__40310_40328__$1);
var G__40338 = null;
var G__40339 = 0;
var G__40340 = 0;
seq__40310_40316 = G__40337;
chunk__40311_40317 = G__40338;
count__40312_40318 = G__40339;
i__40313_40319 = G__40340;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__40345_40349 = cljs.core.seq(domina.nodes(content));var chunk__40346_40350 = null;var count__40347_40351 = 0;var i__40348_40352 = 0;while(true){
if((i__40348_40352 < count__40347_40351))
{var node_40353 = chunk__40346_40350.cljs$core$IIndexed$_nth$arity$2(null,i__40348_40352);goog.dom.classes.add(node_40353,class$);
{
var G__40354 = seq__40345_40349;
var G__40355 = chunk__40346_40350;
var G__40356 = count__40347_40351;
var G__40357 = (i__40348_40352 + 1);
seq__40345_40349 = G__40354;
chunk__40346_40350 = G__40355;
count__40347_40351 = G__40356;
i__40348_40352 = G__40357;
continue;
}
} else
{var temp__4126__auto___40358 = cljs.core.seq(seq__40345_40349);if(temp__4126__auto___40358)
{var seq__40345_40359__$1 = temp__4126__auto___40358;if(cljs.core.chunked_seq_QMARK_(seq__40345_40359__$1))
{var c__4295__auto___40360 = cljs.core.chunk_first(seq__40345_40359__$1);{
var G__40361 = cljs.core.chunk_rest(seq__40345_40359__$1);
var G__40362 = c__4295__auto___40360;
var G__40363 = cljs.core.count(c__4295__auto___40360);
var G__40364 = 0;
seq__40345_40349 = G__40361;
chunk__40346_40350 = G__40362;
count__40347_40351 = G__40363;
i__40348_40352 = G__40364;
continue;
}
} else
{var node_40365 = cljs.core.first(seq__40345_40359__$1);goog.dom.classes.add(node_40365,class$);
{
var G__40366 = cljs.core.next(seq__40345_40359__$1);
var G__40367 = null;
var G__40368 = 0;
var G__40369 = 0;
seq__40345_40349 = G__40366;
chunk__40346_40350 = G__40367;
count__40347_40351 = G__40368;
i__40348_40352 = G__40369;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__40374_40378 = cljs.core.seq(domina.nodes(content));var chunk__40375_40379 = null;var count__40376_40380 = 0;var i__40377_40381 = 0;while(true){
if((i__40377_40381 < count__40376_40380))
{var node_40382 = chunk__40375_40379.cljs$core$IIndexed$_nth$arity$2(null,i__40377_40381);goog.dom.classes.remove(node_40382,class$);
{
var G__40383 = seq__40374_40378;
var G__40384 = chunk__40375_40379;
var G__40385 = count__40376_40380;
var G__40386 = (i__40377_40381 + 1);
seq__40374_40378 = G__40383;
chunk__40375_40379 = G__40384;
count__40376_40380 = G__40385;
i__40377_40381 = G__40386;
continue;
}
} else
{var temp__4126__auto___40387 = cljs.core.seq(seq__40374_40378);if(temp__4126__auto___40387)
{var seq__40374_40388__$1 = temp__4126__auto___40387;if(cljs.core.chunked_seq_QMARK_(seq__40374_40388__$1))
{var c__4295__auto___40389 = cljs.core.chunk_first(seq__40374_40388__$1);{
var G__40390 = cljs.core.chunk_rest(seq__40374_40388__$1);
var G__40391 = c__4295__auto___40389;
var G__40392 = cljs.core.count(c__4295__auto___40389);
var G__40393 = 0;
seq__40374_40378 = G__40390;
chunk__40375_40379 = G__40391;
count__40376_40380 = G__40392;
i__40377_40381 = G__40393;
continue;
}
} else
{var node_40394 = cljs.core.first(seq__40374_40388__$1);goog.dom.classes.remove(node_40394,class$);
{
var G__40395 = cljs.core.next(seq__40374_40388__$1);
var G__40396 = null;
var G__40397 = 0;
var G__40398 = 0;
seq__40374_40378 = G__40395;
chunk__40375_40379 = G__40396;
count__40376_40380 = G__40397;
i__40377_40381 = G__40398;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__40403_40407 = cljs.core.seq(domina.nodes(content));var chunk__40404_40408 = null;var count__40405_40409 = 0;var i__40406_40410 = 0;while(true){
if((i__40406_40410 < count__40405_40409))
{var node_40411 = chunk__40404_40408.cljs$core$IIndexed$_nth$arity$2(null,i__40406_40410);goog.dom.classes.toggle(node_40411,class$);
{
var G__40412 = seq__40403_40407;
var G__40413 = chunk__40404_40408;
var G__40414 = count__40405_40409;
var G__40415 = (i__40406_40410 + 1);
seq__40403_40407 = G__40412;
chunk__40404_40408 = G__40413;
count__40405_40409 = G__40414;
i__40406_40410 = G__40415;
continue;
}
} else
{var temp__4126__auto___40416 = cljs.core.seq(seq__40403_40407);if(temp__4126__auto___40416)
{var seq__40403_40417__$1 = temp__4126__auto___40416;if(cljs.core.chunked_seq_QMARK_(seq__40403_40417__$1))
{var c__4295__auto___40418 = cljs.core.chunk_first(seq__40403_40417__$1);{
var G__40419 = cljs.core.chunk_rest(seq__40403_40417__$1);
var G__40420 = c__4295__auto___40418;
var G__40421 = cljs.core.count(c__4295__auto___40418);
var G__40422 = 0;
seq__40403_40407 = G__40419;
chunk__40404_40408 = G__40420;
count__40405_40409 = G__40421;
i__40406_40410 = G__40422;
continue;
}
} else
{var node_40423 = cljs.core.first(seq__40403_40417__$1);goog.dom.classes.toggle(node_40423,class$);
{
var G__40424 = cljs.core.next(seq__40403_40417__$1);
var G__40425 = null;
var G__40426 = 0;
var G__40427 = 0;
seq__40403_40407 = G__40424;
chunk__40404_40408 = G__40425;
count__40405_40409 = G__40426;
i__40406_40410 = G__40427;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_40436__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__40432_40437 = cljs.core.seq(domina.nodes(content));var chunk__40433_40438 = null;var count__40434_40439 = 0;var i__40435_40440 = 0;while(true){
if((i__40435_40440 < count__40434_40439))
{var node_40441 = chunk__40433_40438.cljs$core$IIndexed$_nth$arity$2(null,i__40435_40440);goog.dom.classes.set(node_40441,classes_40436__$1);
{
var G__40442 = seq__40432_40437;
var G__40443 = chunk__40433_40438;
var G__40444 = count__40434_40439;
var G__40445 = (i__40435_40440 + 1);
seq__40432_40437 = G__40442;
chunk__40433_40438 = G__40443;
count__40434_40439 = G__40444;
i__40435_40440 = G__40445;
continue;
}
} else
{var temp__4126__auto___40446 = cljs.core.seq(seq__40432_40437);if(temp__4126__auto___40446)
{var seq__40432_40447__$1 = temp__4126__auto___40446;if(cljs.core.chunked_seq_QMARK_(seq__40432_40447__$1))
{var c__4295__auto___40448 = cljs.core.chunk_first(seq__40432_40447__$1);{
var G__40449 = cljs.core.chunk_rest(seq__40432_40447__$1);
var G__40450 = c__4295__auto___40448;
var G__40451 = cljs.core.count(c__4295__auto___40448);
var G__40452 = 0;
seq__40432_40437 = G__40449;
chunk__40433_40438 = G__40450;
count__40434_40439 = G__40451;
i__40435_40440 = G__40452;
continue;
}
} else
{var node_40453 = cljs.core.first(seq__40432_40447__$1);goog.dom.classes.set(node_40453,classes_40436__$1);
{
var G__40454 = cljs.core.next(seq__40432_40447__$1);
var G__40455 = null;
var G__40456 = 0;
var G__40457 = 0;
seq__40432_40437 = G__40454;
chunk__40433_40438 = G__40455;
count__40434_40439 = G__40456;
i__40435_40440 = G__40457;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__40462_40466 = cljs.core.seq(domina.nodes(content));var chunk__40463_40467 = null;var count__40464_40468 = 0;var i__40465_40469 = 0;while(true){
if((i__40465_40469 < count__40464_40468))
{var node_40470 = chunk__40463_40467.cljs$core$IIndexed$_nth$arity$2(null,i__40465_40469);goog.dom.setTextContent(node_40470,value);
{
var G__40471 = seq__40462_40466;
var G__40472 = chunk__40463_40467;
var G__40473 = count__40464_40468;
var G__40474 = (i__40465_40469 + 1);
seq__40462_40466 = G__40471;
chunk__40463_40467 = G__40472;
count__40464_40468 = G__40473;
i__40465_40469 = G__40474;
continue;
}
} else
{var temp__4126__auto___40475 = cljs.core.seq(seq__40462_40466);if(temp__4126__auto___40475)
{var seq__40462_40476__$1 = temp__4126__auto___40475;if(cljs.core.chunked_seq_QMARK_(seq__40462_40476__$1))
{var c__4295__auto___40477 = cljs.core.chunk_first(seq__40462_40476__$1);{
var G__40478 = cljs.core.chunk_rest(seq__40462_40476__$1);
var G__40479 = c__4295__auto___40477;
var G__40480 = cljs.core.count(c__4295__auto___40477);
var G__40481 = 0;
seq__40462_40466 = G__40478;
chunk__40463_40467 = G__40479;
count__40464_40468 = G__40480;
i__40465_40469 = G__40481;
continue;
}
} else
{var node_40482 = cljs.core.first(seq__40462_40476__$1);goog.dom.setTextContent(node_40482,value);
{
var G__40483 = cljs.core.next(seq__40462_40476__$1);
var G__40484 = null;
var G__40485 = 0;
var G__40486 = 0;
seq__40462_40466 = G__40483;
chunk__40463_40467 = G__40484;
count__40464_40468 = G__40485;
i__40465_40469 = G__40486;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__40491_40495 = cljs.core.seq(domina.nodes(content));var chunk__40492_40496 = null;var count__40493_40497 = 0;var i__40494_40498 = 0;while(true){
if((i__40494_40498 < count__40493_40497))
{var node_40499 = chunk__40492_40496.cljs$core$IIndexed$_nth$arity$2(null,i__40494_40498);goog.dom.forms.setValue(node_40499,value);
{
var G__40500 = seq__40491_40495;
var G__40501 = chunk__40492_40496;
var G__40502 = count__40493_40497;
var G__40503 = (i__40494_40498 + 1);
seq__40491_40495 = G__40500;
chunk__40492_40496 = G__40501;
count__40493_40497 = G__40502;
i__40494_40498 = G__40503;
continue;
}
} else
{var temp__4126__auto___40504 = cljs.core.seq(seq__40491_40495);if(temp__4126__auto___40504)
{var seq__40491_40505__$1 = temp__4126__auto___40504;if(cljs.core.chunked_seq_QMARK_(seq__40491_40505__$1))
{var c__4295__auto___40506 = cljs.core.chunk_first(seq__40491_40505__$1);{
var G__40507 = cljs.core.chunk_rest(seq__40491_40505__$1);
var G__40508 = c__4295__auto___40506;
var G__40509 = cljs.core.count(c__4295__auto___40506);
var G__40510 = 0;
seq__40491_40495 = G__40507;
chunk__40492_40496 = G__40508;
count__40493_40497 = G__40509;
i__40494_40498 = G__40510;
continue;
}
} else
{var node_40511 = cljs.core.first(seq__40491_40505__$1);goog.dom.forms.setValue(node_40511,value);
{
var G__40512 = cljs.core.next(seq__40491_40505__$1);
var G__40513 = null;
var G__40514 = 0;
var G__40515 = 0;
seq__40491_40495 = G__40512;
chunk__40492_40496 = G__40513;
count__40493_40497 = G__40514;
i__40494_40498 = G__40515;
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
{var value_40526 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__40522_40527 = cljs.core.seq(domina.nodes(content));var chunk__40523_40528 = null;var count__40524_40529 = 0;var i__40525_40530 = 0;while(true){
if((i__40525_40530 < count__40524_40529))
{var node_40531 = chunk__40523_40528.cljs$core$IIndexed$_nth$arity$2(null,i__40525_40530);node_40531.innerHTML = value_40526;
{
var G__40532 = seq__40522_40527;
var G__40533 = chunk__40523_40528;
var G__40534 = count__40524_40529;
var G__40535 = (i__40525_40530 + 1);
seq__40522_40527 = G__40532;
chunk__40523_40528 = G__40533;
count__40524_40529 = G__40534;
i__40525_40530 = G__40535;
continue;
}
} else
{var temp__4126__auto___40536 = cljs.core.seq(seq__40522_40527);if(temp__4126__auto___40536)
{var seq__40522_40537__$1 = temp__4126__auto___40536;if(cljs.core.chunked_seq_QMARK_(seq__40522_40537__$1))
{var c__4295__auto___40538 = cljs.core.chunk_first(seq__40522_40537__$1);{
var G__40539 = cljs.core.chunk_rest(seq__40522_40537__$1);
var G__40540 = c__4295__auto___40538;
var G__40541 = cljs.core.count(c__4295__auto___40538);
var G__40542 = 0;
seq__40522_40527 = G__40539;
chunk__40523_40528 = G__40540;
count__40524_40529 = G__40541;
i__40525_40530 = G__40542;
continue;
}
} else
{var node_40543 = cljs.core.first(seq__40522_40537__$1);node_40543.innerHTML = value_40526;
{
var G__40544 = cljs.core.next(seq__40522_40537__$1);
var G__40545 = null;
var G__40546 = 0;
var G__40547 = 0;
seq__40522_40527 = G__40544;
chunk__40523_40528 = G__40545;
count__40524_40529 = G__40546;
i__40525_40530 = G__40547;
continue;
}
}
} else
{}
}
break;
}
}catch (e40521){if((e40521 instanceof Error))
{var e_40548 = e40521;domina.replace_children_BANG_(content,value_40526);
} else
{if(cljs.core.constant$keyword$580)
{throw e40521;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__40555_40559 = cljs.core.seq(children);var chunk__40556_40560 = null;var count__40557_40561 = 0;var i__40558_40562 = 0;while(true){
if((i__40558_40562 < count__40557_40561))
{var child_40563 = chunk__40556_40560.cljs$core$IIndexed$_nth$arity$2(null,i__40558_40562);frag.appendChild(child_40563);
{
var G__40564 = seq__40555_40559;
var G__40565 = chunk__40556_40560;
var G__40566 = count__40557_40561;
var G__40567 = (i__40558_40562 + 1);
seq__40555_40559 = G__40564;
chunk__40556_40560 = G__40565;
count__40557_40561 = G__40566;
i__40558_40562 = G__40567;
continue;
}
} else
{var temp__4126__auto___40568 = cljs.core.seq(seq__40555_40559);if(temp__4126__auto___40568)
{var seq__40555_40569__$1 = temp__4126__auto___40568;if(cljs.core.chunked_seq_QMARK_(seq__40555_40569__$1))
{var c__4295__auto___40570 = cljs.core.chunk_first(seq__40555_40569__$1);{
var G__40571 = cljs.core.chunk_rest(seq__40555_40569__$1);
var G__40572 = c__4295__auto___40570;
var G__40573 = cljs.core.count(c__4295__auto___40570);
var G__40574 = 0;
seq__40555_40559 = G__40571;
chunk__40556_40560 = G__40572;
count__40557_40561 = G__40573;
i__40558_40562 = G__40574;
continue;
}
} else
{var child_40575 = cljs.core.first(seq__40555_40569__$1);frag.appendChild(child_40575);
{
var G__40576 = cljs.core.next(seq__40555_40569__$1);
var G__40577 = null;
var G__40578 = 0;
var G__40579 = 0;
seq__40555_40559 = G__40576;
chunk__40556_40560 = G__40577;
count__40557_40561 = G__40578;
i__40558_40562 = G__40579;
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
return (function (p1__40549_SHARP_,p2__40550_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__40549_SHARP_,p2__40550_SHARP_) : f.call(null,p1__40549_SHARP_,p2__40550_SHARP_));
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
{if((function (){var G__40581 = list_thing;if(G__40581)
{var bit__4189__auto__ = (G__40581.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__40581.cljs$core$ISeqable$))
{return true;
} else
{if((!G__40581.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__40581);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__40581);
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
{if((function (){var G__40582 = content;if(G__40582)
{var bit__4189__auto__ = (G__40582.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__40582.cljs$core$ISeqable$))
{return true;
} else
{if((!G__40582.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__40582);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__40582);
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
{if((function (){var G__40583 = content;if(G__40583)
{var bit__4189__auto__ = (G__40583.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__40583.cljs$core$ISeqable$))
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
