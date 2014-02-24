// Compiled by ClojureScript 0.0-2138
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_17120 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_17121 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_17122 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_17121,table_section_wrapper_17121,opt_wrapper_17120,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_17122,table_section_wrapper_17121,cell_wrapper_17122,opt_wrapper_17120,table_section_wrapper_17121,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_17121]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__17127 = cljs.core.seq.call(null,tbody);var chunk__17128 = null;var count__17129 = 0;var i__17130 = 0;while(true){
if((i__17130 < count__17129))
{var child = cljs.core._nth.call(null,chunk__17128,i__17130);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17131 = seq__17127;
var G__17132 = chunk__17128;
var G__17133 = count__17129;
var G__17134 = (i__17130 + 1);
seq__17127 = G__17131;
chunk__17128 = G__17132;
count__17129 = G__17133;
i__17130 = G__17134;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17127);if(temp__4092__auto__)
{var seq__17127__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17127__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__17127__$1);{
var G__17135 = cljs.core.chunk_rest.call(null,seq__17127__$1);
var G__17136 = c__4148__auto__;
var G__17137 = cljs.core.count.call(null,c__4148__auto__);
var G__17138 = 0;
seq__17127 = G__17135;
chunk__17128 = G__17136;
count__17129 = G__17137;
i__17130 = G__17138;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__17127__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17139 = cljs.core.next.call(null,seq__17127__$1);
var G__17140 = null;
var G__17141 = 0;
var G__17142 = 0;
seq__17127 = G__17139;
chunk__17128 = G__17140;
count__17129 = G__17141;
i__17130 = G__17142;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__17144 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__17144,0,null);var start_wrap = cljs.core.nth.call(null,vec__17144,1,null);var end_wrap = cljs.core.nth.call(null,vec__17144,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__17145 = wrapper.lastChild;
var G__17146 = (level - 1);
wrapper = G__17145;
level = G__17146;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj17148 = {};return obj17148;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__17149){
var mesg = cljs.core.seq(arglist__17149);
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
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__17150){
var mesg = cljs.core.seq(arglist__17150);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__17151){
var contents = cljs.core.seq(arglist__17151);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__17152_SHARP_){return p1__17152_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__17153_SHARP_,p2__17154_SHARP_){return goog.dom.insertChildAt(p1__17153_SHARP_,p2__17154_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17156_SHARP_,p2__17155_SHARP_){return goog.dom.insertSiblingBefore(p2__17155_SHARP_,p1__17156_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17158_SHARP_,p2__17157_SHARP_){return goog.dom.insertSiblingAfter(p2__17157_SHARP_,p1__17158_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__17160_SHARP_,p2__17159_SHARP_){return goog.dom.replaceNode(p2__17159_SHARP_,p1__17160_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__17165_17169 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17166_17170 = null;var count__17167_17171 = 0;var i__17168_17172 = 0;while(true){
if((i__17168_17172 < count__17167_17171))
{var n_17173 = cljs.core._nth.call(null,chunk__17166_17170,i__17168_17172);goog.style.setStyle(n_17173,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17174 = seq__17165_17169;
var G__17175 = chunk__17166_17170;
var G__17176 = count__17167_17171;
var G__17177 = (i__17168_17172 + 1);
seq__17165_17169 = G__17174;
chunk__17166_17170 = G__17175;
count__17167_17171 = G__17176;
i__17168_17172 = G__17177;
continue;
}
} else
{var temp__4092__auto___17178 = cljs.core.seq.call(null,seq__17165_17169);if(temp__4092__auto___17178)
{var seq__17165_17179__$1 = temp__4092__auto___17178;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17165_17179__$1))
{var c__4148__auto___17180 = cljs.core.chunk_first.call(null,seq__17165_17179__$1);{
var G__17181 = cljs.core.chunk_rest.call(null,seq__17165_17179__$1);
var G__17182 = c__4148__auto___17180;
var G__17183 = cljs.core.count.call(null,c__4148__auto___17180);
var G__17184 = 0;
seq__17165_17169 = G__17181;
chunk__17166_17170 = G__17182;
count__17167_17171 = G__17183;
i__17168_17172 = G__17184;
continue;
}
} else
{var n_17185 = cljs.core.first.call(null,seq__17165_17179__$1);goog.style.setStyle(n_17185,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17186 = cljs.core.next.call(null,seq__17165_17179__$1);
var G__17187 = null;
var G__17188 = 0;
var G__17189 = 0;
seq__17165_17169 = G__17186;
chunk__17166_17170 = G__17187;
count__17167_17171 = G__17188;
i__17168_17172 = G__17189;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17190){
var content = cljs.core.first(arglist__17190);
arglist__17190 = cljs.core.next(arglist__17190);
var name = cljs.core.first(arglist__17190);
var value = cljs.core.rest(arglist__17190);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__17195_17199 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17196_17200 = null;var count__17197_17201 = 0;var i__17198_17202 = 0;while(true){
if((i__17198_17202 < count__17197_17201))
{var n_17203 = cljs.core._nth.call(null,chunk__17196_17200,i__17198_17202);n_17203.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17204 = seq__17195_17199;
var G__17205 = chunk__17196_17200;
var G__17206 = count__17197_17201;
var G__17207 = (i__17198_17202 + 1);
seq__17195_17199 = G__17204;
chunk__17196_17200 = G__17205;
count__17197_17201 = G__17206;
i__17198_17202 = G__17207;
continue;
}
} else
{var temp__4092__auto___17208 = cljs.core.seq.call(null,seq__17195_17199);if(temp__4092__auto___17208)
{var seq__17195_17209__$1 = temp__4092__auto___17208;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17195_17209__$1))
{var c__4148__auto___17210 = cljs.core.chunk_first.call(null,seq__17195_17209__$1);{
var G__17211 = cljs.core.chunk_rest.call(null,seq__17195_17209__$1);
var G__17212 = c__4148__auto___17210;
var G__17213 = cljs.core.count.call(null,c__4148__auto___17210);
var G__17214 = 0;
seq__17195_17199 = G__17211;
chunk__17196_17200 = G__17212;
count__17197_17201 = G__17213;
i__17198_17202 = G__17214;
continue;
}
} else
{var n_17215 = cljs.core.first.call(null,seq__17195_17209__$1);n_17215.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17216 = cljs.core.next.call(null,seq__17195_17209__$1);
var G__17217 = null;
var G__17218 = 0;
var G__17219 = 0;
seq__17195_17199 = G__17216;
chunk__17196_17200 = G__17217;
count__17197_17201 = G__17218;
i__17198_17202 = G__17219;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__17220){
var content = cljs.core.first(arglist__17220);
arglist__17220 = cljs.core.next(arglist__17220);
var name = cljs.core.first(arglist__17220);
var value = cljs.core.rest(arglist__17220);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__17225_17229 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17226_17230 = null;var count__17227_17231 = 0;var i__17228_17232 = 0;while(true){
if((i__17228_17232 < count__17227_17231))
{var n_17233 = cljs.core._nth.call(null,chunk__17226_17230,i__17228_17232);n_17233.removeAttribute(cljs.core.name.call(null,name));
{
var G__17234 = seq__17225_17229;
var G__17235 = chunk__17226_17230;
var G__17236 = count__17227_17231;
var G__17237 = (i__17228_17232 + 1);
seq__17225_17229 = G__17234;
chunk__17226_17230 = G__17235;
count__17227_17231 = G__17236;
i__17228_17232 = G__17237;
continue;
}
} else
{var temp__4092__auto___17238 = cljs.core.seq.call(null,seq__17225_17229);if(temp__4092__auto___17238)
{var seq__17225_17239__$1 = temp__4092__auto___17238;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17225_17239__$1))
{var c__4148__auto___17240 = cljs.core.chunk_first.call(null,seq__17225_17239__$1);{
var G__17241 = cljs.core.chunk_rest.call(null,seq__17225_17239__$1);
var G__17242 = c__4148__auto___17240;
var G__17243 = cljs.core.count.call(null,c__4148__auto___17240);
var G__17244 = 0;
seq__17225_17229 = G__17241;
chunk__17226_17230 = G__17242;
count__17227_17231 = G__17243;
i__17228_17232 = G__17244;
continue;
}
} else
{var n_17245 = cljs.core.first.call(null,seq__17225_17239__$1);n_17245.removeAttribute(cljs.core.name.call(null,name));
{
var G__17246 = cljs.core.next.call(null,seq__17225_17239__$1);
var G__17247 = null;
var G__17248 = 0;
var G__17249 = 0;
seq__17225_17229 = G__17246;
chunk__17226_17230 = G__17247;
count__17227_17231 = G__17248;
i__17228_17232 = G__17249;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__17251 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__17251,0,null);var v = cljs.core.nth.call(null,vec__17251,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__17252_SHARP_){var attr = attrs__$1.item(p1__17252_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__17259_17265 = cljs.core.seq.call(null,styles);var chunk__17260_17266 = null;var count__17261_17267 = 0;var i__17262_17268 = 0;while(true){
if((i__17262_17268 < count__17261_17267))
{var vec__17263_17269 = cljs.core._nth.call(null,chunk__17260_17266,i__17262_17268);var name_17270 = cljs.core.nth.call(null,vec__17263_17269,0,null);var value_17271 = cljs.core.nth.call(null,vec__17263_17269,1,null);domina.set_style_BANG_.call(null,content,name_17270,value_17271);
{
var G__17272 = seq__17259_17265;
var G__17273 = chunk__17260_17266;
var G__17274 = count__17261_17267;
var G__17275 = (i__17262_17268 + 1);
seq__17259_17265 = G__17272;
chunk__17260_17266 = G__17273;
count__17261_17267 = G__17274;
i__17262_17268 = G__17275;
continue;
}
} else
{var temp__4092__auto___17276 = cljs.core.seq.call(null,seq__17259_17265);if(temp__4092__auto___17276)
{var seq__17259_17277__$1 = temp__4092__auto___17276;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17259_17277__$1))
{var c__4148__auto___17278 = cljs.core.chunk_first.call(null,seq__17259_17277__$1);{
var G__17279 = cljs.core.chunk_rest.call(null,seq__17259_17277__$1);
var G__17280 = c__4148__auto___17278;
var G__17281 = cljs.core.count.call(null,c__4148__auto___17278);
var G__17282 = 0;
seq__17259_17265 = G__17279;
chunk__17260_17266 = G__17280;
count__17261_17267 = G__17281;
i__17262_17268 = G__17282;
continue;
}
} else
{var vec__17264_17283 = cljs.core.first.call(null,seq__17259_17277__$1);var name_17284 = cljs.core.nth.call(null,vec__17264_17283,0,null);var value_17285 = cljs.core.nth.call(null,vec__17264_17283,1,null);domina.set_style_BANG_.call(null,content,name_17284,value_17285);
{
var G__17286 = cljs.core.next.call(null,seq__17259_17277__$1);
var G__17287 = null;
var G__17288 = 0;
var G__17289 = 0;
seq__17259_17265 = G__17286;
chunk__17260_17266 = G__17287;
count__17261_17267 = G__17288;
i__17262_17268 = G__17289;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__17296_17302 = cljs.core.seq.call(null,attrs);var chunk__17297_17303 = null;var count__17298_17304 = 0;var i__17299_17305 = 0;while(true){
if((i__17299_17305 < count__17298_17304))
{var vec__17300_17306 = cljs.core._nth.call(null,chunk__17297_17303,i__17299_17305);var name_17307 = cljs.core.nth.call(null,vec__17300_17306,0,null);var value_17308 = cljs.core.nth.call(null,vec__17300_17306,1,null);domina.set_attr_BANG_.call(null,content,name_17307,value_17308);
{
var G__17309 = seq__17296_17302;
var G__17310 = chunk__17297_17303;
var G__17311 = count__17298_17304;
var G__17312 = (i__17299_17305 + 1);
seq__17296_17302 = G__17309;
chunk__17297_17303 = G__17310;
count__17298_17304 = G__17311;
i__17299_17305 = G__17312;
continue;
}
} else
{var temp__4092__auto___17313 = cljs.core.seq.call(null,seq__17296_17302);if(temp__4092__auto___17313)
{var seq__17296_17314__$1 = temp__4092__auto___17313;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17296_17314__$1))
{var c__4148__auto___17315 = cljs.core.chunk_first.call(null,seq__17296_17314__$1);{
var G__17316 = cljs.core.chunk_rest.call(null,seq__17296_17314__$1);
var G__17317 = c__4148__auto___17315;
var G__17318 = cljs.core.count.call(null,c__4148__auto___17315);
var G__17319 = 0;
seq__17296_17302 = G__17316;
chunk__17297_17303 = G__17317;
count__17298_17304 = G__17318;
i__17299_17305 = G__17319;
continue;
}
} else
{var vec__17301_17320 = cljs.core.first.call(null,seq__17296_17314__$1);var name_17321 = cljs.core.nth.call(null,vec__17301_17320,0,null);var value_17322 = cljs.core.nth.call(null,vec__17301_17320,1,null);domina.set_attr_BANG_.call(null,content,name_17321,value_17322);
{
var G__17323 = cljs.core.next.call(null,seq__17296_17314__$1);
var G__17324 = null;
var G__17325 = 0;
var G__17326 = 0;
seq__17296_17302 = G__17323;
chunk__17297_17303 = G__17324;
count__17298_17304 = G__17325;
i__17299_17305 = G__17326;
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
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__17331_17335 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17332_17336 = null;var count__17333_17337 = 0;var i__17334_17338 = 0;while(true){
if((i__17334_17338 < count__17333_17337))
{var node_17339 = cljs.core._nth.call(null,chunk__17332_17336,i__17334_17338);goog.dom.classes.add(node_17339,class$);
{
var G__17340 = seq__17331_17335;
var G__17341 = chunk__17332_17336;
var G__17342 = count__17333_17337;
var G__17343 = (i__17334_17338 + 1);
seq__17331_17335 = G__17340;
chunk__17332_17336 = G__17341;
count__17333_17337 = G__17342;
i__17334_17338 = G__17343;
continue;
}
} else
{var temp__4092__auto___17344 = cljs.core.seq.call(null,seq__17331_17335);if(temp__4092__auto___17344)
{var seq__17331_17345__$1 = temp__4092__auto___17344;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17331_17345__$1))
{var c__4148__auto___17346 = cljs.core.chunk_first.call(null,seq__17331_17345__$1);{
var G__17347 = cljs.core.chunk_rest.call(null,seq__17331_17345__$1);
var G__17348 = c__4148__auto___17346;
var G__17349 = cljs.core.count.call(null,c__4148__auto___17346);
var G__17350 = 0;
seq__17331_17335 = G__17347;
chunk__17332_17336 = G__17348;
count__17333_17337 = G__17349;
i__17334_17338 = G__17350;
continue;
}
} else
{var node_17351 = cljs.core.first.call(null,seq__17331_17345__$1);goog.dom.classes.add(node_17351,class$);
{
var G__17352 = cljs.core.next.call(null,seq__17331_17345__$1);
var G__17353 = null;
var G__17354 = 0;
var G__17355 = 0;
seq__17331_17335 = G__17352;
chunk__17332_17336 = G__17353;
count__17333_17337 = G__17354;
i__17334_17338 = G__17355;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__17360_17364 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17361_17365 = null;var count__17362_17366 = 0;var i__17363_17367 = 0;while(true){
if((i__17363_17367 < count__17362_17366))
{var node_17368 = cljs.core._nth.call(null,chunk__17361_17365,i__17363_17367);goog.dom.classes.remove(node_17368,class$);
{
var G__17369 = seq__17360_17364;
var G__17370 = chunk__17361_17365;
var G__17371 = count__17362_17366;
var G__17372 = (i__17363_17367 + 1);
seq__17360_17364 = G__17369;
chunk__17361_17365 = G__17370;
count__17362_17366 = G__17371;
i__17363_17367 = G__17372;
continue;
}
} else
{var temp__4092__auto___17373 = cljs.core.seq.call(null,seq__17360_17364);if(temp__4092__auto___17373)
{var seq__17360_17374__$1 = temp__4092__auto___17373;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17360_17374__$1))
{var c__4148__auto___17375 = cljs.core.chunk_first.call(null,seq__17360_17374__$1);{
var G__17376 = cljs.core.chunk_rest.call(null,seq__17360_17374__$1);
var G__17377 = c__4148__auto___17375;
var G__17378 = cljs.core.count.call(null,c__4148__auto___17375);
var G__17379 = 0;
seq__17360_17364 = G__17376;
chunk__17361_17365 = G__17377;
count__17362_17366 = G__17378;
i__17363_17367 = G__17379;
continue;
}
} else
{var node_17380 = cljs.core.first.call(null,seq__17360_17374__$1);goog.dom.classes.remove(node_17380,class$);
{
var G__17381 = cljs.core.next.call(null,seq__17360_17374__$1);
var G__17382 = null;
var G__17383 = 0;
var G__17384 = 0;
seq__17360_17364 = G__17381;
chunk__17361_17365 = G__17382;
count__17362_17366 = G__17383;
i__17363_17367 = G__17384;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__17389_17393 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17390_17394 = null;var count__17391_17395 = 0;var i__17392_17396 = 0;while(true){
if((i__17392_17396 < count__17391_17395))
{var node_17397 = cljs.core._nth.call(null,chunk__17390_17394,i__17392_17396);goog.dom.classes.toggle(node_17397,class$);
{
var G__17398 = seq__17389_17393;
var G__17399 = chunk__17390_17394;
var G__17400 = count__17391_17395;
var G__17401 = (i__17392_17396 + 1);
seq__17389_17393 = G__17398;
chunk__17390_17394 = G__17399;
count__17391_17395 = G__17400;
i__17392_17396 = G__17401;
continue;
}
} else
{var temp__4092__auto___17402 = cljs.core.seq.call(null,seq__17389_17393);if(temp__4092__auto___17402)
{var seq__17389_17403__$1 = temp__4092__auto___17402;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17389_17403__$1))
{var c__4148__auto___17404 = cljs.core.chunk_first.call(null,seq__17389_17403__$1);{
var G__17405 = cljs.core.chunk_rest.call(null,seq__17389_17403__$1);
var G__17406 = c__4148__auto___17404;
var G__17407 = cljs.core.count.call(null,c__4148__auto___17404);
var G__17408 = 0;
seq__17389_17393 = G__17405;
chunk__17390_17394 = G__17406;
count__17391_17395 = G__17407;
i__17392_17396 = G__17408;
continue;
}
} else
{var node_17409 = cljs.core.first.call(null,seq__17389_17403__$1);goog.dom.classes.toggle(node_17409,class$);
{
var G__17410 = cljs.core.next.call(null,seq__17389_17403__$1);
var G__17411 = null;
var G__17412 = 0;
var G__17413 = 0;
seq__17389_17393 = G__17410;
chunk__17390_17394 = G__17411;
count__17391_17395 = G__17412;
i__17392_17396 = G__17413;
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
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_17422__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__17418_17423 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17419_17424 = null;var count__17420_17425 = 0;var i__17421_17426 = 0;while(true){
if((i__17421_17426 < count__17420_17425))
{var node_17427 = cljs.core._nth.call(null,chunk__17419_17424,i__17421_17426);goog.dom.classes.set(node_17427,classes_17422__$1);
{
var G__17428 = seq__17418_17423;
var G__17429 = chunk__17419_17424;
var G__17430 = count__17420_17425;
var G__17431 = (i__17421_17426 + 1);
seq__17418_17423 = G__17428;
chunk__17419_17424 = G__17429;
count__17420_17425 = G__17430;
i__17421_17426 = G__17431;
continue;
}
} else
{var temp__4092__auto___17432 = cljs.core.seq.call(null,seq__17418_17423);if(temp__4092__auto___17432)
{var seq__17418_17433__$1 = temp__4092__auto___17432;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17418_17433__$1))
{var c__4148__auto___17434 = cljs.core.chunk_first.call(null,seq__17418_17433__$1);{
var G__17435 = cljs.core.chunk_rest.call(null,seq__17418_17433__$1);
var G__17436 = c__4148__auto___17434;
var G__17437 = cljs.core.count.call(null,c__4148__auto___17434);
var G__17438 = 0;
seq__17418_17423 = G__17435;
chunk__17419_17424 = G__17436;
count__17420_17425 = G__17437;
i__17421_17426 = G__17438;
continue;
}
} else
{var node_17439 = cljs.core.first.call(null,seq__17418_17433__$1);goog.dom.classes.set(node_17439,classes_17422__$1);
{
var G__17440 = cljs.core.next.call(null,seq__17418_17433__$1);
var G__17441 = null;
var G__17442 = 0;
var G__17443 = 0;
seq__17418_17423 = G__17440;
chunk__17419_17424 = G__17441;
count__17420_17425 = G__17442;
i__17421_17426 = G__17443;
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
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__17448_17452 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17449_17453 = null;var count__17450_17454 = 0;var i__17451_17455 = 0;while(true){
if((i__17451_17455 < count__17450_17454))
{var node_17456 = cljs.core._nth.call(null,chunk__17449_17453,i__17451_17455);goog.dom.setTextContent(node_17456,value);
{
var G__17457 = seq__17448_17452;
var G__17458 = chunk__17449_17453;
var G__17459 = count__17450_17454;
var G__17460 = (i__17451_17455 + 1);
seq__17448_17452 = G__17457;
chunk__17449_17453 = G__17458;
count__17450_17454 = G__17459;
i__17451_17455 = G__17460;
continue;
}
} else
{var temp__4092__auto___17461 = cljs.core.seq.call(null,seq__17448_17452);if(temp__4092__auto___17461)
{var seq__17448_17462__$1 = temp__4092__auto___17461;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17448_17462__$1))
{var c__4148__auto___17463 = cljs.core.chunk_first.call(null,seq__17448_17462__$1);{
var G__17464 = cljs.core.chunk_rest.call(null,seq__17448_17462__$1);
var G__17465 = c__4148__auto___17463;
var G__17466 = cljs.core.count.call(null,c__4148__auto___17463);
var G__17467 = 0;
seq__17448_17452 = G__17464;
chunk__17449_17453 = G__17465;
count__17450_17454 = G__17466;
i__17451_17455 = G__17467;
continue;
}
} else
{var node_17468 = cljs.core.first.call(null,seq__17448_17462__$1);goog.dom.setTextContent(node_17468,value);
{
var G__17469 = cljs.core.next.call(null,seq__17448_17462__$1);
var G__17470 = null;
var G__17471 = 0;
var G__17472 = 0;
seq__17448_17452 = G__17469;
chunk__17449_17453 = G__17470;
count__17450_17454 = G__17471;
i__17451_17455 = G__17472;
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
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__17477_17481 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17478_17482 = null;var count__17479_17483 = 0;var i__17480_17484 = 0;while(true){
if((i__17480_17484 < count__17479_17483))
{var node_17485 = cljs.core._nth.call(null,chunk__17478_17482,i__17480_17484);goog.dom.forms.setValue(node_17485,value);
{
var G__17486 = seq__17477_17481;
var G__17487 = chunk__17478_17482;
var G__17488 = count__17479_17483;
var G__17489 = (i__17480_17484 + 1);
seq__17477_17481 = G__17486;
chunk__17478_17482 = G__17487;
count__17479_17483 = G__17488;
i__17480_17484 = G__17489;
continue;
}
} else
{var temp__4092__auto___17490 = cljs.core.seq.call(null,seq__17477_17481);if(temp__4092__auto___17490)
{var seq__17477_17491__$1 = temp__4092__auto___17490;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17477_17491__$1))
{var c__4148__auto___17492 = cljs.core.chunk_first.call(null,seq__17477_17491__$1);{
var G__17493 = cljs.core.chunk_rest.call(null,seq__17477_17491__$1);
var G__17494 = c__4148__auto___17492;
var G__17495 = cljs.core.count.call(null,c__4148__auto___17492);
var G__17496 = 0;
seq__17477_17481 = G__17493;
chunk__17478_17482 = G__17494;
count__17479_17483 = G__17495;
i__17480_17484 = G__17496;
continue;
}
} else
{var node_17497 = cljs.core.first.call(null,seq__17477_17491__$1);goog.dom.forms.setValue(node_17497,value);
{
var G__17498 = cljs.core.next.call(null,seq__17477_17491__$1);
var G__17499 = null;
var G__17500 = 0;
var G__17501 = 0;
seq__17477_17481 = G__17498;
chunk__17478_17482 = G__17499;
count__17479_17483 = G__17500;
i__17480_17484 = G__17501;
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
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_17512 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17508_17513 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17509_17514 = null;var count__17510_17515 = 0;var i__17511_17516 = 0;while(true){
if((i__17511_17516 < count__17510_17515))
{var node_17517 = cljs.core._nth.call(null,chunk__17509_17514,i__17511_17516);node_17517.innerHTML = value_17512;
{
var G__17518 = seq__17508_17513;
var G__17519 = chunk__17509_17514;
var G__17520 = count__17510_17515;
var G__17521 = (i__17511_17516 + 1);
seq__17508_17513 = G__17518;
chunk__17509_17514 = G__17519;
count__17510_17515 = G__17520;
i__17511_17516 = G__17521;
continue;
}
} else
{var temp__4092__auto___17522 = cljs.core.seq.call(null,seq__17508_17513);if(temp__4092__auto___17522)
{var seq__17508_17523__$1 = temp__4092__auto___17522;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17508_17523__$1))
{var c__4148__auto___17524 = cljs.core.chunk_first.call(null,seq__17508_17523__$1);{
var G__17525 = cljs.core.chunk_rest.call(null,seq__17508_17523__$1);
var G__17526 = c__4148__auto___17524;
var G__17527 = cljs.core.count.call(null,c__4148__auto___17524);
var G__17528 = 0;
seq__17508_17513 = G__17525;
chunk__17509_17514 = G__17526;
count__17510_17515 = G__17527;
i__17511_17516 = G__17528;
continue;
}
} else
{var node_17529 = cljs.core.first.call(null,seq__17508_17523__$1);node_17529.innerHTML = value_17512;
{
var G__17530 = cljs.core.next.call(null,seq__17508_17523__$1);
var G__17531 = null;
var G__17532 = 0;
var G__17533 = 0;
seq__17508_17513 = G__17530;
chunk__17509_17514 = G__17531;
count__17510_17515 = G__17532;
i__17511_17516 = G__17533;
continue;
}
}
} else
{}
}
break;
}
}catch (e17507){if((e17507 instanceof Error))
{var e_17534 = e17507;domina.replace_children_BANG_.call(null,content,value_17512);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17507;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17541_17545 = cljs.core.seq.call(null,children);var chunk__17542_17546 = null;var count__17543_17547 = 0;var i__17544_17548 = 0;while(true){
if((i__17544_17548 < count__17543_17547))
{var child_17549 = cljs.core._nth.call(null,chunk__17542_17546,i__17544_17548);frag.appendChild(child_17549);
{
var G__17550 = seq__17541_17545;
var G__17551 = chunk__17542_17546;
var G__17552 = count__17543_17547;
var G__17553 = (i__17544_17548 + 1);
seq__17541_17545 = G__17550;
chunk__17542_17546 = G__17551;
count__17543_17547 = G__17552;
i__17544_17548 = G__17553;
continue;
}
} else
{var temp__4092__auto___17554 = cljs.core.seq.call(null,seq__17541_17545);if(temp__4092__auto___17554)
{var seq__17541_17555__$1 = temp__4092__auto___17554;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17541_17555__$1))
{var c__4148__auto___17556 = cljs.core.chunk_first.call(null,seq__17541_17555__$1);{
var G__17557 = cljs.core.chunk_rest.call(null,seq__17541_17555__$1);
var G__17558 = c__4148__auto___17556;
var G__17559 = cljs.core.count.call(null,c__4148__auto___17556);
var G__17560 = 0;
seq__17541_17545 = G__17557;
chunk__17542_17546 = G__17558;
count__17543_17547 = G__17559;
i__17544_17548 = G__17560;
continue;
}
} else
{var child_17561 = cljs.core.first.call(null,seq__17541_17555__$1);frag.appendChild(child_17561);
{
var G__17562 = cljs.core.next.call(null,seq__17541_17555__$1);
var G__17563 = null;
var G__17564 = 0;
var G__17565 = 0;
seq__17541_17545 = G__17562;
chunk__17542_17546 = G__17563;
count__17543_17547 = G__17564;
i__17544_17548 = G__17565;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17535_SHARP_,p2__17536_SHARP_){return f.call(null,p1__17535_SHARP_,p2__17536_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
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
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
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
{if((function (){var G__17567 = list_thing;if(G__17567)
{var bit__4050__auto__ = (G__17567.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17567.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17567.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17567);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17567);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
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
{if((function (){var G__17568 = content;if(G__17568)
{var bit__4050__auto__ = (G__17568.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17568.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17568.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17568);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17568);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
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
{if((function (){var G__17569 = content;if(G__17569)
{var bit__4050__auto__ = (G__17569.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17569.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17569.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17569);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17569);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map