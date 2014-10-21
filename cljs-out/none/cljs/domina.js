// Compiled by ClojureScript 0.0-2356
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
var opt_wrapper_87130 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_87131 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_87132 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_87132,opt_wrapper_87130,table_section_wrapper_87131,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_87130,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_87131,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_87131,cell_wrapper_87132,table_section_wrapper_87131,table_section_wrapper_87131]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3625__auto__ = div.firstChild;if(cljs.core.truth_(and__3625__auto__))
{return div.firstChild.childNodes;
} else
{return and__3625__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__87137 = cljs.core.seq.call(null,tbody);var chunk__87138 = null;var count__87139 = (0);var i__87140 = (0);while(true){
if((i__87140 < count__87139))
{var child = cljs.core._nth.call(null,chunk__87138,i__87140);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__87141 = seq__87137;
var G__87142 = chunk__87138;
var G__87143 = count__87139;
var G__87144 = (i__87140 + (1));
seq__87137 = G__87141;
chunk__87138 = G__87142;
count__87139 = G__87143;
i__87140 = G__87144;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__87137);if(temp__4126__auto__)
{var seq__87137__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87137__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__87137__$1);{
var G__87145 = cljs.core.chunk_rest.call(null,seq__87137__$1);
var G__87146 = c__4406__auto__;
var G__87147 = cljs.core.count.call(null,c__4406__auto__);
var G__87148 = (0);
seq__87137 = G__87145;
chunk__87138 = G__87146;
count__87139 = G__87147;
i__87140 = G__87148;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__87137__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__87149 = cljs.core.next.call(null,seq__87137__$1);
var G__87150 = null;
var G__87151 = (0);
var G__87152 = (0);
seq__87137 = G__87149;
chunk__87138 = G__87150;
count__87139 = G__87151;
i__87140 = G__87152;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__87154 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__87154,(0),null);var start_wrap = cljs.core.nth.call(null,vec__87154,(1),null);var end_wrap = cljs.core.nth.call(null,vec__87154,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__87155 = wrapper.lastChild;
var G__87156 = (level - (1));
wrapper = G__87155;
level = G__87156;
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
if(cljs.core.truth_((function (){var and__3625__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3625__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3625__auto__;
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
domina.DomContent = (function (){var obj87158 = {};return obj87158;
})();
domina.nodes = (function nodes(content){if((function (){var and__3625__auto__ = content;if(and__3625__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3625__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4273__auto__ = (((content == null))?null:content);return (function (){var or__3637__auto__ = (domina.nodes[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.nodes["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3625__auto__ = nodeseq;if(and__3625__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3625__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4273__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3637__auto__ = (domina.single_node[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.single_node["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3625__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3625__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3625__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__87159){
var mesg = cljs.core.seq(arglist__87159);
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
log.cljs$lang$applyTo = (function (arglist__87160){
var mesg = cljs.core.seq(arglist__87160);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__87161){
var contents = cljs.core.seq(arglist__87161);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__87162_SHARP_){return p1__87162_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__87163_SHARP_,p2__87164_SHARP_){return goog.dom.insertChildAt(p1__87163_SHARP_,p2__87164_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__87166_SHARP_,p2__87165_SHARP_){return goog.dom.insertSiblingBefore(p2__87165_SHARP_,p1__87166_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__87168_SHARP_,p2__87167_SHARP_){return goog.dom.insertSiblingAfter(p2__87167_SHARP_,p1__87168_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__87170_SHARP_,p2__87169_SHARP_){return goog.dom.replaceNode(p2__87169_SHARP_,p1__87170_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__87175_87179 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__87176_87180 = null;var count__87177_87181 = (0);var i__87178_87182 = (0);while(true){
if((i__87178_87182 < count__87177_87181))
{var n_87183 = cljs.core._nth.call(null,chunk__87176_87180,i__87178_87182);goog.style.setStyle(n_87183,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__87184 = seq__87175_87179;
var G__87185 = chunk__87176_87180;
var G__87186 = count__87177_87181;
var G__87187 = (i__87178_87182 + (1));
seq__87175_87179 = G__87184;
chunk__87176_87180 = G__87185;
count__87177_87181 = G__87186;
i__87178_87182 = G__87187;
continue;
}
} else
{var temp__4126__auto___87188 = cljs.core.seq.call(null,seq__87175_87179);if(temp__4126__auto___87188)
{var seq__87175_87189__$1 = temp__4126__auto___87188;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87175_87189__$1))
{var c__4406__auto___87190 = cljs.core.chunk_first.call(null,seq__87175_87189__$1);{
var G__87191 = cljs.core.chunk_rest.call(null,seq__87175_87189__$1);
var G__87192 = c__4406__auto___87190;
var G__87193 = cljs.core.count.call(null,c__4406__auto___87190);
var G__87194 = (0);
seq__87175_87179 = G__87191;
chunk__87176_87180 = G__87192;
count__87177_87181 = G__87193;
i__87178_87182 = G__87194;
continue;
}
} else
{var n_87195 = cljs.core.first.call(null,seq__87175_87189__$1);goog.style.setStyle(n_87195,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__87196 = cljs.core.next.call(null,seq__87175_87189__$1);
var G__87197 = null;
var G__87198 = (0);
var G__87199 = (0);
seq__87175_87179 = G__87196;
chunk__87176_87180 = G__87197;
count__87177_87181 = G__87198;
i__87178_87182 = G__87199;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__87200){
var content = cljs.core.first(arglist__87200);
arglist__87200 = cljs.core.next(arglist__87200);
var name = cljs.core.first(arglist__87200);
var value = cljs.core.rest(arglist__87200);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__87205_87209 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__87206_87210 = null;var count__87207_87211 = (0);var i__87208_87212 = (0);while(true){
if((i__87208_87212 < count__87207_87211))
{var n_87213 = cljs.core._nth.call(null,chunk__87206_87210,i__87208_87212);n_87213.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__87214 = seq__87205_87209;
var G__87215 = chunk__87206_87210;
var G__87216 = count__87207_87211;
var G__87217 = (i__87208_87212 + (1));
seq__87205_87209 = G__87214;
chunk__87206_87210 = G__87215;
count__87207_87211 = G__87216;
i__87208_87212 = G__87217;
continue;
}
} else
{var temp__4126__auto___87218 = cljs.core.seq.call(null,seq__87205_87209);if(temp__4126__auto___87218)
{var seq__87205_87219__$1 = temp__4126__auto___87218;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87205_87219__$1))
{var c__4406__auto___87220 = cljs.core.chunk_first.call(null,seq__87205_87219__$1);{
var G__87221 = cljs.core.chunk_rest.call(null,seq__87205_87219__$1);
var G__87222 = c__4406__auto___87220;
var G__87223 = cljs.core.count.call(null,c__4406__auto___87220);
var G__87224 = (0);
seq__87205_87209 = G__87221;
chunk__87206_87210 = G__87222;
count__87207_87211 = G__87223;
i__87208_87212 = G__87224;
continue;
}
} else
{var n_87225 = cljs.core.first.call(null,seq__87205_87219__$1);n_87225.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__87226 = cljs.core.next.call(null,seq__87205_87219__$1);
var G__87227 = null;
var G__87228 = (0);
var G__87229 = (0);
seq__87205_87209 = G__87226;
chunk__87206_87210 = G__87227;
count__87207_87211 = G__87228;
i__87208_87212 = G__87229;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__87230){
var content = cljs.core.first(arglist__87230);
arglist__87230 = cljs.core.next(arglist__87230);
var name = cljs.core.first(arglist__87230);
var value = cljs.core.rest(arglist__87230);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__87235_87239 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__87236_87240 = null;var count__87237_87241 = (0);var i__87238_87242 = (0);while(true){
if((i__87238_87242 < count__87237_87241))
{var n_87243 = cljs.core._nth.call(null,chunk__87236_87240,i__87238_87242);n_87243.removeAttribute(cljs.core.name.call(null,name));
{
var G__87244 = seq__87235_87239;
var G__87245 = chunk__87236_87240;
var G__87246 = count__87237_87241;
var G__87247 = (i__87238_87242 + (1));
seq__87235_87239 = G__87244;
chunk__87236_87240 = G__87245;
count__87237_87241 = G__87246;
i__87238_87242 = G__87247;
continue;
}
} else
{var temp__4126__auto___87248 = cljs.core.seq.call(null,seq__87235_87239);if(temp__4126__auto___87248)
{var seq__87235_87249__$1 = temp__4126__auto___87248;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87235_87249__$1))
{var c__4406__auto___87250 = cljs.core.chunk_first.call(null,seq__87235_87249__$1);{
var G__87251 = cljs.core.chunk_rest.call(null,seq__87235_87249__$1);
var G__87252 = c__4406__auto___87250;
var G__87253 = cljs.core.count.call(null,c__4406__auto___87250);
var G__87254 = (0);
seq__87235_87239 = G__87251;
chunk__87236_87240 = G__87252;
count__87237_87241 = G__87253;
i__87238_87242 = G__87254;
continue;
}
} else
{var n_87255 = cljs.core.first.call(null,seq__87235_87249__$1);n_87255.removeAttribute(cljs.core.name.call(null,name));
{
var G__87256 = cljs.core.next.call(null,seq__87235_87249__$1);
var G__87257 = null;
var G__87258 = (0);
var G__87259 = (0);
seq__87235_87239 = G__87256;
chunk__87236_87240 = G__87257;
count__87237_87241 = G__87258;
i__87238_87242 = G__87259;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__87261 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__87261,(0),null);var v = cljs.core.nth.call(null,vec__87261,(1),null);if(cljs.core.truth_((function (){var and__3625__auto__ = k;if(cljs.core.truth_(and__3625__auto__))
{return v;
} else
{return and__3625__auto__;
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
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__87262_SHARP_){var attr = attrs__$1.item(p1__87262_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__87269_87275 = cljs.core.seq.call(null,styles);var chunk__87270_87276 = null;var count__87271_87277 = (0);var i__87272_87278 = (0);while(true){
if((i__87272_87278 < count__87271_87277))
{var vec__87273_87279 = cljs.core._nth.call(null,chunk__87270_87276,i__87272_87278);var name_87280 = cljs.core.nth.call(null,vec__87273_87279,(0),null);var value_87281 = cljs.core.nth.call(null,vec__87273_87279,(1),null);domina.set_style_BANG_.call(null,content,name_87280,value_87281);
{
var G__87282 = seq__87269_87275;
var G__87283 = chunk__87270_87276;
var G__87284 = count__87271_87277;
var G__87285 = (i__87272_87278 + (1));
seq__87269_87275 = G__87282;
chunk__87270_87276 = G__87283;
count__87271_87277 = G__87284;
i__87272_87278 = G__87285;
continue;
}
} else
{var temp__4126__auto___87286 = cljs.core.seq.call(null,seq__87269_87275);if(temp__4126__auto___87286)
{var seq__87269_87287__$1 = temp__4126__auto___87286;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87269_87287__$1))
{var c__4406__auto___87288 = cljs.core.chunk_first.call(null,seq__87269_87287__$1);{
var G__87289 = cljs.core.chunk_rest.call(null,seq__87269_87287__$1);
var G__87290 = c__4406__auto___87288;
var G__87291 = cljs.core.count.call(null,c__4406__auto___87288);
var G__87292 = (0);
seq__87269_87275 = G__87289;
chunk__87270_87276 = G__87290;
count__87271_87277 = G__87291;
i__87272_87278 = G__87292;
continue;
}
} else
{var vec__87274_87293 = cljs.core.first.call(null,seq__87269_87287__$1);var name_87294 = cljs.core.nth.call(null,vec__87274_87293,(0),null);var value_87295 = cljs.core.nth.call(null,vec__87274_87293,(1),null);domina.set_style_BANG_.call(null,content,name_87294,value_87295);
{
var G__87296 = cljs.core.next.call(null,seq__87269_87287__$1);
var G__87297 = null;
var G__87298 = (0);
var G__87299 = (0);
seq__87269_87275 = G__87296;
chunk__87270_87276 = G__87297;
count__87271_87277 = G__87298;
i__87272_87278 = G__87299;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__87306_87312 = cljs.core.seq.call(null,attrs);var chunk__87307_87313 = null;var count__87308_87314 = (0);var i__87309_87315 = (0);while(true){
if((i__87309_87315 < count__87308_87314))
{var vec__87310_87316 = cljs.core._nth.call(null,chunk__87307_87313,i__87309_87315);var name_87317 = cljs.core.nth.call(null,vec__87310_87316,(0),null);var value_87318 = cljs.core.nth.call(null,vec__87310_87316,(1),null);domina.set_attr_BANG_.call(null,content,name_87317,value_87318);
{
var G__87319 = seq__87306_87312;
var G__87320 = chunk__87307_87313;
var G__87321 = count__87308_87314;
var G__87322 = (i__87309_87315 + (1));
seq__87306_87312 = G__87319;
chunk__87307_87313 = G__87320;
count__87308_87314 = G__87321;
i__87309_87315 = G__87322;
continue;
}
} else
{var temp__4126__auto___87323 = cljs.core.seq.call(null,seq__87306_87312);if(temp__4126__auto___87323)
{var seq__87306_87324__$1 = temp__4126__auto___87323;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87306_87324__$1))
{var c__4406__auto___87325 = cljs.core.chunk_first.call(null,seq__87306_87324__$1);{
var G__87326 = cljs.core.chunk_rest.call(null,seq__87306_87324__$1);
var G__87327 = c__4406__auto___87325;
var G__87328 = cljs.core.count.call(null,c__4406__auto___87325);
var G__87329 = (0);
seq__87306_87312 = G__87326;
chunk__87307_87313 = G__87327;
count__87308_87314 = G__87328;
i__87309_87315 = G__87329;
continue;
}
} else
{var vec__87311_87330 = cljs.core.first.call(null,seq__87306_87324__$1);var name_87331 = cljs.core.nth.call(null,vec__87311_87330,(0),null);var value_87332 = cljs.core.nth.call(null,vec__87311_87330,(1),null);domina.set_attr_BANG_.call(null,content,name_87331,value_87332);
{
var G__87333 = cljs.core.next.call(null,seq__87306_87324__$1);
var G__87334 = null;
var G__87335 = (0);
var G__87336 = (0);
seq__87306_87312 = G__87333;
chunk__87307_87313 = G__87334;
count__87308_87314 = G__87335;
i__87309_87315 = G__87336;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__87341_87345 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__87342_87346 = null;var count__87343_87347 = (0);var i__87344_87348 = (0);while(true){
if((i__87344_87348 < count__87343_87347))
{var node_87349 = cljs.core._nth.call(null,chunk__87342_87346,i__87344_87348);goog.dom.classes.add(node_87349,class$);
{
var G__87350 = seq__87341_87345;
var G__87351 = chunk__87342_87346;
var G__87352 = count__87343_87347;
var G__87353 = (i__87344_87348 + (1));
seq__87341_87345 = G__87350;
chunk__87342_87346 = G__87351;
count__87343_87347 = G__87352;
i__87344_87348 = G__87353;
continue;
}
} else
{var temp__4126__auto___87354 = cljs.core.seq.call(null,seq__87341_87345);if(temp__4126__auto___87354)
{var seq__87341_87355__$1 = temp__4126__auto___87354;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87341_87355__$1))
{var c__4406__auto___87356 = cljs.core.chunk_first.call(null,seq__87341_87355__$1);{
var G__87357 = cljs.core.chunk_rest.call(null,seq__87341_87355__$1);
var G__87358 = c__4406__auto___87356;
var G__87359 = cljs.core.count.call(null,c__4406__auto___87356);
var G__87360 = (0);
seq__87341_87345 = G__87357;
chunk__87342_87346 = G__87358;
count__87343_87347 = G__87359;
i__87344_87348 = G__87360;
continue;
}
} else
{var node_87361 = cljs.core.first.call(null,seq__87341_87355__$1);goog.dom.classes.add(node_87361,class$);
{
var G__87362 = cljs.core.next.call(null,seq__87341_87355__$1);
var G__87363 = null;
var G__87364 = (0);
var G__87365 = (0);
seq__87341_87345 = G__87362;
chunk__87342_87346 = G__87363;
count__87343_87347 = G__87364;
i__87344_87348 = G__87365;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__87370_87374 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__87371_87375 = null;var count__87372_87376 = (0);var i__87373_87377 = (0);while(true){
if((i__87373_87377 < count__87372_87376))
{var node_87378 = cljs.core._nth.call(null,chunk__87371_87375,i__87373_87377);goog.dom.classes.remove(node_87378,class$);
{
var G__87379 = seq__87370_87374;
var G__87380 = chunk__87371_87375;
var G__87381 = count__87372_87376;
var G__87382 = (i__87373_87377 + (1));
seq__87370_87374 = G__87379;
chunk__87371_87375 = G__87380;
count__87372_87376 = G__87381;
i__87373_87377 = G__87382;
continue;
}
} else
{var temp__4126__auto___87383 = cljs.core.seq.call(null,seq__87370_87374);if(temp__4126__auto___87383)
{var seq__87370_87384__$1 = temp__4126__auto___87383;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87370_87384__$1))
{var c__4406__auto___87385 = cljs.core.chunk_first.call(null,seq__87370_87384__$1);{
var G__87386 = cljs.core.chunk_rest.call(null,seq__87370_87384__$1);
var G__87387 = c__4406__auto___87385;
var G__87388 = cljs.core.count.call(null,c__4406__auto___87385);
var G__87389 = (0);
seq__87370_87374 = G__87386;
chunk__87371_87375 = G__87387;
count__87372_87376 = G__87388;
i__87373_87377 = G__87389;
continue;
}
} else
{var node_87390 = cljs.core.first.call(null,seq__87370_87384__$1);goog.dom.classes.remove(node_87390,class$);
{
var G__87391 = cljs.core.next.call(null,seq__87370_87384__$1);
var G__87392 = null;
var G__87393 = (0);
var G__87394 = (0);
seq__87370_87374 = G__87391;
chunk__87371_87375 = G__87392;
count__87372_87376 = G__87393;
i__87373_87377 = G__87394;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__87399_87403 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__87400_87404 = null;var count__87401_87405 = (0);var i__87402_87406 = (0);while(true){
if((i__87402_87406 < count__87401_87405))
{var node_87407 = cljs.core._nth.call(null,chunk__87400_87404,i__87402_87406);goog.dom.classes.toggle(node_87407,class$);
{
var G__87408 = seq__87399_87403;
var G__87409 = chunk__87400_87404;
var G__87410 = count__87401_87405;
var G__87411 = (i__87402_87406 + (1));
seq__87399_87403 = G__87408;
chunk__87400_87404 = G__87409;
count__87401_87405 = G__87410;
i__87402_87406 = G__87411;
continue;
}
} else
{var temp__4126__auto___87412 = cljs.core.seq.call(null,seq__87399_87403);if(temp__4126__auto___87412)
{var seq__87399_87413__$1 = temp__4126__auto___87412;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87399_87413__$1))
{var c__4406__auto___87414 = cljs.core.chunk_first.call(null,seq__87399_87413__$1);{
var G__87415 = cljs.core.chunk_rest.call(null,seq__87399_87413__$1);
var G__87416 = c__4406__auto___87414;
var G__87417 = cljs.core.count.call(null,c__4406__auto___87414);
var G__87418 = (0);
seq__87399_87403 = G__87415;
chunk__87400_87404 = G__87416;
count__87401_87405 = G__87417;
i__87402_87406 = G__87418;
continue;
}
} else
{var node_87419 = cljs.core.first.call(null,seq__87399_87413__$1);goog.dom.classes.toggle(node_87419,class$);
{
var G__87420 = cljs.core.next.call(null,seq__87399_87413__$1);
var G__87421 = null;
var G__87422 = (0);
var G__87423 = (0);
seq__87399_87403 = G__87420;
chunk__87400_87404 = G__87421;
count__87401_87405 = G__87422;
i__87402_87406 = G__87423;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_87432__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__87428_87433 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__87429_87434 = null;var count__87430_87435 = (0);var i__87431_87436 = (0);while(true){
if((i__87431_87436 < count__87430_87435))
{var node_87437 = cljs.core._nth.call(null,chunk__87429_87434,i__87431_87436);goog.dom.classes.set(node_87437,classes_87432__$1);
{
var G__87438 = seq__87428_87433;
var G__87439 = chunk__87429_87434;
var G__87440 = count__87430_87435;
var G__87441 = (i__87431_87436 + (1));
seq__87428_87433 = G__87438;
chunk__87429_87434 = G__87439;
count__87430_87435 = G__87440;
i__87431_87436 = G__87441;
continue;
}
} else
{var temp__4126__auto___87442 = cljs.core.seq.call(null,seq__87428_87433);if(temp__4126__auto___87442)
{var seq__87428_87443__$1 = temp__4126__auto___87442;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87428_87443__$1))
{var c__4406__auto___87444 = cljs.core.chunk_first.call(null,seq__87428_87443__$1);{
var G__87445 = cljs.core.chunk_rest.call(null,seq__87428_87443__$1);
var G__87446 = c__4406__auto___87444;
var G__87447 = cljs.core.count.call(null,c__4406__auto___87444);
var G__87448 = (0);
seq__87428_87433 = G__87445;
chunk__87429_87434 = G__87446;
count__87430_87435 = G__87447;
i__87431_87436 = G__87448;
continue;
}
} else
{var node_87449 = cljs.core.first.call(null,seq__87428_87443__$1);goog.dom.classes.set(node_87449,classes_87432__$1);
{
var G__87450 = cljs.core.next.call(null,seq__87428_87443__$1);
var G__87451 = null;
var G__87452 = (0);
var G__87453 = (0);
seq__87428_87433 = G__87450;
chunk__87429_87434 = G__87451;
count__87430_87435 = G__87452;
i__87431_87436 = G__87453;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__87458_87462 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__87459_87463 = null;var count__87460_87464 = (0);var i__87461_87465 = (0);while(true){
if((i__87461_87465 < count__87460_87464))
{var node_87466 = cljs.core._nth.call(null,chunk__87459_87463,i__87461_87465);goog.dom.setTextContent(node_87466,value);
{
var G__87467 = seq__87458_87462;
var G__87468 = chunk__87459_87463;
var G__87469 = count__87460_87464;
var G__87470 = (i__87461_87465 + (1));
seq__87458_87462 = G__87467;
chunk__87459_87463 = G__87468;
count__87460_87464 = G__87469;
i__87461_87465 = G__87470;
continue;
}
} else
{var temp__4126__auto___87471 = cljs.core.seq.call(null,seq__87458_87462);if(temp__4126__auto___87471)
{var seq__87458_87472__$1 = temp__4126__auto___87471;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87458_87472__$1))
{var c__4406__auto___87473 = cljs.core.chunk_first.call(null,seq__87458_87472__$1);{
var G__87474 = cljs.core.chunk_rest.call(null,seq__87458_87472__$1);
var G__87475 = c__4406__auto___87473;
var G__87476 = cljs.core.count.call(null,c__4406__auto___87473);
var G__87477 = (0);
seq__87458_87462 = G__87474;
chunk__87459_87463 = G__87475;
count__87460_87464 = G__87476;
i__87461_87465 = G__87477;
continue;
}
} else
{var node_87478 = cljs.core.first.call(null,seq__87458_87472__$1);goog.dom.setTextContent(node_87478,value);
{
var G__87479 = cljs.core.next.call(null,seq__87458_87472__$1);
var G__87480 = null;
var G__87481 = (0);
var G__87482 = (0);
seq__87458_87462 = G__87479;
chunk__87459_87463 = G__87480;
count__87460_87464 = G__87481;
i__87461_87465 = G__87482;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__87487_87491 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__87488_87492 = null;var count__87489_87493 = (0);var i__87490_87494 = (0);while(true){
if((i__87490_87494 < count__87489_87493))
{var node_87495 = cljs.core._nth.call(null,chunk__87488_87492,i__87490_87494);goog.dom.forms.setValue(node_87495,value);
{
var G__87496 = seq__87487_87491;
var G__87497 = chunk__87488_87492;
var G__87498 = count__87489_87493;
var G__87499 = (i__87490_87494 + (1));
seq__87487_87491 = G__87496;
chunk__87488_87492 = G__87497;
count__87489_87493 = G__87498;
i__87490_87494 = G__87499;
continue;
}
} else
{var temp__4126__auto___87500 = cljs.core.seq.call(null,seq__87487_87491);if(temp__4126__auto___87500)
{var seq__87487_87501__$1 = temp__4126__auto___87500;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87487_87501__$1))
{var c__4406__auto___87502 = cljs.core.chunk_first.call(null,seq__87487_87501__$1);{
var G__87503 = cljs.core.chunk_rest.call(null,seq__87487_87501__$1);
var G__87504 = c__4406__auto___87502;
var G__87505 = cljs.core.count.call(null,c__4406__auto___87502);
var G__87506 = (0);
seq__87487_87491 = G__87503;
chunk__87488_87492 = G__87504;
count__87489_87493 = G__87505;
i__87490_87494 = G__87506;
continue;
}
} else
{var node_87507 = cljs.core.first.call(null,seq__87487_87501__$1);goog.dom.forms.setValue(node_87507,value);
{
var G__87508 = cljs.core.next.call(null,seq__87487_87501__$1);
var G__87509 = null;
var G__87510 = (0);
var G__87511 = (0);
seq__87487_87491 = G__87508;
chunk__87488_87492 = G__87509;
count__87489_87493 = G__87510;
i__87490_87494 = G__87511;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3625__auto__ = allows_inner_html_QMARK_;if(and__3625__auto__)
{var and__3625__auto____$1 = (function (){var or__3637__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3625__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3625__auto____$1;
}
} else
{return and__3625__auto__;
}
})()))
{var value_87522 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__87518_87523 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__87519_87524 = null;var count__87520_87525 = (0);var i__87521_87526 = (0);while(true){
if((i__87521_87526 < count__87520_87525))
{var node_87527 = cljs.core._nth.call(null,chunk__87519_87524,i__87521_87526);node_87527.innerHTML = value_87522;
{
var G__87528 = seq__87518_87523;
var G__87529 = chunk__87519_87524;
var G__87530 = count__87520_87525;
var G__87531 = (i__87521_87526 + (1));
seq__87518_87523 = G__87528;
chunk__87519_87524 = G__87529;
count__87520_87525 = G__87530;
i__87521_87526 = G__87531;
continue;
}
} else
{var temp__4126__auto___87532 = cljs.core.seq.call(null,seq__87518_87523);if(temp__4126__auto___87532)
{var seq__87518_87533__$1 = temp__4126__auto___87532;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87518_87533__$1))
{var c__4406__auto___87534 = cljs.core.chunk_first.call(null,seq__87518_87533__$1);{
var G__87535 = cljs.core.chunk_rest.call(null,seq__87518_87533__$1);
var G__87536 = c__4406__auto___87534;
var G__87537 = cljs.core.count.call(null,c__4406__auto___87534);
var G__87538 = (0);
seq__87518_87523 = G__87535;
chunk__87519_87524 = G__87536;
count__87520_87525 = G__87537;
i__87521_87526 = G__87538;
continue;
}
} else
{var node_87539 = cljs.core.first.call(null,seq__87518_87533__$1);node_87539.innerHTML = value_87522;
{
var G__87540 = cljs.core.next.call(null,seq__87518_87533__$1);
var G__87541 = null;
var G__87542 = (0);
var G__87543 = (0);
seq__87518_87523 = G__87540;
chunk__87519_87524 = G__87541;
count__87520_87525 = G__87542;
i__87521_87526 = G__87543;
continue;
}
}
} else
{}
}
break;
}
}catch (e87517){if((e87517 instanceof Error))
{var e_87544 = e87517;domina.replace_children_BANG_.call(null,content,value_87522);
} else
{throw e87517;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3625__auto__ = bubble;if(cljs.core.truth_(and__3625__auto__))
{return (value == null);
} else
{return and__3625__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3637__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__87551_87555 = cljs.core.seq.call(null,children);var chunk__87552_87556 = null;var count__87553_87557 = (0);var i__87554_87558 = (0);while(true){
if((i__87554_87558 < count__87553_87557))
{var child_87559 = cljs.core._nth.call(null,chunk__87552_87556,i__87554_87558);frag.appendChild(child_87559);
{
var G__87560 = seq__87551_87555;
var G__87561 = chunk__87552_87556;
var G__87562 = count__87553_87557;
var G__87563 = (i__87554_87558 + (1));
seq__87551_87555 = G__87560;
chunk__87552_87556 = G__87561;
count__87553_87557 = G__87562;
i__87554_87558 = G__87563;
continue;
}
} else
{var temp__4126__auto___87564 = cljs.core.seq.call(null,seq__87551_87555);if(temp__4126__auto___87564)
{var seq__87551_87565__$1 = temp__4126__auto___87564;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87551_87565__$1))
{var c__4406__auto___87566 = cljs.core.chunk_first.call(null,seq__87551_87565__$1);{
var G__87567 = cljs.core.chunk_rest.call(null,seq__87551_87565__$1);
var G__87568 = c__4406__auto___87566;
var G__87569 = cljs.core.count.call(null,c__4406__auto___87566);
var G__87570 = (0);
seq__87551_87555 = G__87567;
chunk__87552_87556 = G__87568;
count__87553_87557 = G__87569;
i__87554_87558 = G__87570;
continue;
}
} else
{var child_87571 = cljs.core.first.call(null,seq__87551_87565__$1);frag.appendChild(child_87571);
{
var G__87572 = cljs.core.next.call(null,seq__87551_87565__$1);
var G__87573 = null;
var G__87574 = (0);
var G__87575 = (0);
seq__87551_87555 = G__87572;
chunk__87552_87556 = G__87573;
count__87553_87557 = G__87574;
i__87554_87558 = G__87575;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__87545_SHARP_,p2__87546_SHARP_){return f.call(null,p1__87545_SHARP_,p2__87546_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3625__auto__ = obj;if(cljs.core.truth_(and__3625__auto__))
{var and__3625__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3625__auto____$1)
{return obj.length;
} else
{return and__3625__auto____$1;
}
} else
{return and__3625__auto__;
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
{if((function (){var G__87577 = list_thing;if(G__87577)
{var bit__4300__auto__ = (G__87577.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4300__auto__) || (G__87577.cljs$core$ISeqable$))
{return true;
} else
{if((!G__87577.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__87577);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__87577);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__87578 = content;if(G__87578)
{var bit__4300__auto__ = (G__87578.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4300__auto__) || (G__87578.cljs$core$ISeqable$))
{return true;
} else
{if((!G__87578.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__87578);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__87578);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__87579 = content;if(G__87579)
{var bit__4300__auto__ = (G__87579.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4300__auto__) || (G__87579.cljs$core$ISeqable$))
{return true;
} else
{if((!G__87579.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__87579);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__87579);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

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