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
var opt_wrapper_15092 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_15093 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_15094 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_15093,table_section_wrapper_15093,opt_wrapper_15092,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_15094,table_section_wrapper_15093,cell_wrapper_15094,opt_wrapper_15092,table_section_wrapper_15093,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_15093]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__15099 = cljs.core.seq.call(null,tbody);var chunk__15100 = null;var count__15101 = 0;var i__15102 = 0;while(true){
if((i__15102 < count__15101))
{var child = cljs.core._nth.call(null,chunk__15100,i__15102);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__15103 = seq__15099;
var G__15104 = chunk__15100;
var G__15105 = count__15101;
var G__15106 = (i__15102 + 1);
seq__15099 = G__15103;
chunk__15100 = G__15104;
count__15101 = G__15105;
i__15102 = G__15106;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15099);if(temp__4092__auto__)
{var seq__15099__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15099__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__15099__$1);{
var G__15107 = cljs.core.chunk_rest.call(null,seq__15099__$1);
var G__15108 = c__4148__auto__;
var G__15109 = cljs.core.count.call(null,c__4148__auto__);
var G__15110 = 0;
seq__15099 = G__15107;
chunk__15100 = G__15108;
count__15101 = G__15109;
i__15102 = G__15110;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__15099__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__15111 = cljs.core.next.call(null,seq__15099__$1);
var G__15112 = null;
var G__15113 = 0;
var G__15114 = 0;
seq__15099 = G__15111;
chunk__15100 = G__15112;
count__15101 = G__15113;
i__15102 = G__15114;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__15116 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__15116,0,null);var start_wrap = cljs.core.nth.call(null,vec__15116,1,null);var end_wrap = cljs.core.nth.call(null,vec__15116,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__15117 = wrapper.lastChild;
var G__15118 = (level - 1);
wrapper = G__15117;
level = G__15118;
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
domina.DomContent = (function (){var obj15120 = {};return obj15120;
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
log_debug.cljs$lang$applyTo = (function (arglist__15121){
var mesg = cljs.core.seq(arglist__15121);
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
log.cljs$lang$applyTo = (function (arglist__15122){
var mesg = cljs.core.seq(arglist__15122);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__15123){
var contents = cljs.core.seq(arglist__15123);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__15124_SHARP_){return p1__15124_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__15125_SHARP_,p2__15126_SHARP_){return goog.dom.insertChildAt(p1__15125_SHARP_,p2__15126_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15128_SHARP_,p2__15127_SHARP_){return goog.dom.insertSiblingBefore(p2__15127_SHARP_,p1__15128_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15130_SHARP_,p2__15129_SHARP_){return goog.dom.insertSiblingAfter(p2__15129_SHARP_,p1__15130_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__15132_SHARP_,p2__15131_SHARP_){return goog.dom.replaceNode(p2__15131_SHARP_,p1__15132_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__15137_15141 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15138_15142 = null;var count__15139_15143 = 0;var i__15140_15144 = 0;while(true){
if((i__15140_15144 < count__15139_15143))
{var n_15145 = cljs.core._nth.call(null,chunk__15138_15142,i__15140_15144);goog.style.setStyle(n_15145,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15146 = seq__15137_15141;
var G__15147 = chunk__15138_15142;
var G__15148 = count__15139_15143;
var G__15149 = (i__15140_15144 + 1);
seq__15137_15141 = G__15146;
chunk__15138_15142 = G__15147;
count__15139_15143 = G__15148;
i__15140_15144 = G__15149;
continue;
}
} else
{var temp__4092__auto___15150 = cljs.core.seq.call(null,seq__15137_15141);if(temp__4092__auto___15150)
{var seq__15137_15151__$1 = temp__4092__auto___15150;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15137_15151__$1))
{var c__4148__auto___15152 = cljs.core.chunk_first.call(null,seq__15137_15151__$1);{
var G__15153 = cljs.core.chunk_rest.call(null,seq__15137_15151__$1);
var G__15154 = c__4148__auto___15152;
var G__15155 = cljs.core.count.call(null,c__4148__auto___15152);
var G__15156 = 0;
seq__15137_15141 = G__15153;
chunk__15138_15142 = G__15154;
count__15139_15143 = G__15155;
i__15140_15144 = G__15156;
continue;
}
} else
{var n_15157 = cljs.core.first.call(null,seq__15137_15151__$1);goog.style.setStyle(n_15157,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15158 = cljs.core.next.call(null,seq__15137_15151__$1);
var G__15159 = null;
var G__15160 = 0;
var G__15161 = 0;
seq__15137_15141 = G__15158;
chunk__15138_15142 = G__15159;
count__15139_15143 = G__15160;
i__15140_15144 = G__15161;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15162){
var content = cljs.core.first(arglist__15162);
arglist__15162 = cljs.core.next(arglist__15162);
var name = cljs.core.first(arglist__15162);
var value = cljs.core.rest(arglist__15162);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__15167_15171 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15168_15172 = null;var count__15169_15173 = 0;var i__15170_15174 = 0;while(true){
if((i__15170_15174 < count__15169_15173))
{var n_15175 = cljs.core._nth.call(null,chunk__15168_15172,i__15170_15174);n_15175.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15176 = seq__15167_15171;
var G__15177 = chunk__15168_15172;
var G__15178 = count__15169_15173;
var G__15179 = (i__15170_15174 + 1);
seq__15167_15171 = G__15176;
chunk__15168_15172 = G__15177;
count__15169_15173 = G__15178;
i__15170_15174 = G__15179;
continue;
}
} else
{var temp__4092__auto___15180 = cljs.core.seq.call(null,seq__15167_15171);if(temp__4092__auto___15180)
{var seq__15167_15181__$1 = temp__4092__auto___15180;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15167_15181__$1))
{var c__4148__auto___15182 = cljs.core.chunk_first.call(null,seq__15167_15181__$1);{
var G__15183 = cljs.core.chunk_rest.call(null,seq__15167_15181__$1);
var G__15184 = c__4148__auto___15182;
var G__15185 = cljs.core.count.call(null,c__4148__auto___15182);
var G__15186 = 0;
seq__15167_15171 = G__15183;
chunk__15168_15172 = G__15184;
count__15169_15173 = G__15185;
i__15170_15174 = G__15186;
continue;
}
} else
{var n_15187 = cljs.core.first.call(null,seq__15167_15181__$1);n_15187.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15188 = cljs.core.next.call(null,seq__15167_15181__$1);
var G__15189 = null;
var G__15190 = 0;
var G__15191 = 0;
seq__15167_15171 = G__15188;
chunk__15168_15172 = G__15189;
count__15169_15173 = G__15190;
i__15170_15174 = G__15191;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15192){
var content = cljs.core.first(arglist__15192);
arglist__15192 = cljs.core.next(arglist__15192);
var name = cljs.core.first(arglist__15192);
var value = cljs.core.rest(arglist__15192);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__15197_15201 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15198_15202 = null;var count__15199_15203 = 0;var i__15200_15204 = 0;while(true){
if((i__15200_15204 < count__15199_15203))
{var n_15205 = cljs.core._nth.call(null,chunk__15198_15202,i__15200_15204);n_15205.removeAttribute(cljs.core.name.call(null,name));
{
var G__15206 = seq__15197_15201;
var G__15207 = chunk__15198_15202;
var G__15208 = count__15199_15203;
var G__15209 = (i__15200_15204 + 1);
seq__15197_15201 = G__15206;
chunk__15198_15202 = G__15207;
count__15199_15203 = G__15208;
i__15200_15204 = G__15209;
continue;
}
} else
{var temp__4092__auto___15210 = cljs.core.seq.call(null,seq__15197_15201);if(temp__4092__auto___15210)
{var seq__15197_15211__$1 = temp__4092__auto___15210;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15197_15211__$1))
{var c__4148__auto___15212 = cljs.core.chunk_first.call(null,seq__15197_15211__$1);{
var G__15213 = cljs.core.chunk_rest.call(null,seq__15197_15211__$1);
var G__15214 = c__4148__auto___15212;
var G__15215 = cljs.core.count.call(null,c__4148__auto___15212);
var G__15216 = 0;
seq__15197_15201 = G__15213;
chunk__15198_15202 = G__15214;
count__15199_15203 = G__15215;
i__15200_15204 = G__15216;
continue;
}
} else
{var n_15217 = cljs.core.first.call(null,seq__15197_15211__$1);n_15217.removeAttribute(cljs.core.name.call(null,name));
{
var G__15218 = cljs.core.next.call(null,seq__15197_15211__$1);
var G__15219 = null;
var G__15220 = 0;
var G__15221 = 0;
seq__15197_15201 = G__15218;
chunk__15198_15202 = G__15219;
count__15199_15203 = G__15220;
i__15200_15204 = G__15221;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__15223 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__15223,0,null);var v = cljs.core.nth.call(null,vec__15223,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__15224_SHARP_){var attr = attrs__$1.item(p1__15224_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__15231_15237 = cljs.core.seq.call(null,styles);var chunk__15232_15238 = null;var count__15233_15239 = 0;var i__15234_15240 = 0;while(true){
if((i__15234_15240 < count__15233_15239))
{var vec__15235_15241 = cljs.core._nth.call(null,chunk__15232_15238,i__15234_15240);var name_15242 = cljs.core.nth.call(null,vec__15235_15241,0,null);var value_15243 = cljs.core.nth.call(null,vec__15235_15241,1,null);domina.set_style_BANG_.call(null,content,name_15242,value_15243);
{
var G__15244 = seq__15231_15237;
var G__15245 = chunk__15232_15238;
var G__15246 = count__15233_15239;
var G__15247 = (i__15234_15240 + 1);
seq__15231_15237 = G__15244;
chunk__15232_15238 = G__15245;
count__15233_15239 = G__15246;
i__15234_15240 = G__15247;
continue;
}
} else
{var temp__4092__auto___15248 = cljs.core.seq.call(null,seq__15231_15237);if(temp__4092__auto___15248)
{var seq__15231_15249__$1 = temp__4092__auto___15248;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15231_15249__$1))
{var c__4148__auto___15250 = cljs.core.chunk_first.call(null,seq__15231_15249__$1);{
var G__15251 = cljs.core.chunk_rest.call(null,seq__15231_15249__$1);
var G__15252 = c__4148__auto___15250;
var G__15253 = cljs.core.count.call(null,c__4148__auto___15250);
var G__15254 = 0;
seq__15231_15237 = G__15251;
chunk__15232_15238 = G__15252;
count__15233_15239 = G__15253;
i__15234_15240 = G__15254;
continue;
}
} else
{var vec__15236_15255 = cljs.core.first.call(null,seq__15231_15249__$1);var name_15256 = cljs.core.nth.call(null,vec__15236_15255,0,null);var value_15257 = cljs.core.nth.call(null,vec__15236_15255,1,null);domina.set_style_BANG_.call(null,content,name_15256,value_15257);
{
var G__15258 = cljs.core.next.call(null,seq__15231_15249__$1);
var G__15259 = null;
var G__15260 = 0;
var G__15261 = 0;
seq__15231_15237 = G__15258;
chunk__15232_15238 = G__15259;
count__15233_15239 = G__15260;
i__15234_15240 = G__15261;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__15268_15274 = cljs.core.seq.call(null,attrs);var chunk__15269_15275 = null;var count__15270_15276 = 0;var i__15271_15277 = 0;while(true){
if((i__15271_15277 < count__15270_15276))
{var vec__15272_15278 = cljs.core._nth.call(null,chunk__15269_15275,i__15271_15277);var name_15279 = cljs.core.nth.call(null,vec__15272_15278,0,null);var value_15280 = cljs.core.nth.call(null,vec__15272_15278,1,null);domina.set_attr_BANG_.call(null,content,name_15279,value_15280);
{
var G__15281 = seq__15268_15274;
var G__15282 = chunk__15269_15275;
var G__15283 = count__15270_15276;
var G__15284 = (i__15271_15277 + 1);
seq__15268_15274 = G__15281;
chunk__15269_15275 = G__15282;
count__15270_15276 = G__15283;
i__15271_15277 = G__15284;
continue;
}
} else
{var temp__4092__auto___15285 = cljs.core.seq.call(null,seq__15268_15274);if(temp__4092__auto___15285)
{var seq__15268_15286__$1 = temp__4092__auto___15285;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15268_15286__$1))
{var c__4148__auto___15287 = cljs.core.chunk_first.call(null,seq__15268_15286__$1);{
var G__15288 = cljs.core.chunk_rest.call(null,seq__15268_15286__$1);
var G__15289 = c__4148__auto___15287;
var G__15290 = cljs.core.count.call(null,c__4148__auto___15287);
var G__15291 = 0;
seq__15268_15274 = G__15288;
chunk__15269_15275 = G__15289;
count__15270_15276 = G__15290;
i__15271_15277 = G__15291;
continue;
}
} else
{var vec__15273_15292 = cljs.core.first.call(null,seq__15268_15286__$1);var name_15293 = cljs.core.nth.call(null,vec__15273_15292,0,null);var value_15294 = cljs.core.nth.call(null,vec__15273_15292,1,null);domina.set_attr_BANG_.call(null,content,name_15293,value_15294);
{
var G__15295 = cljs.core.next.call(null,seq__15268_15286__$1);
var G__15296 = null;
var G__15297 = 0;
var G__15298 = 0;
seq__15268_15274 = G__15295;
chunk__15269_15275 = G__15296;
count__15270_15276 = G__15297;
i__15271_15277 = G__15298;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__15303_15307 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15304_15308 = null;var count__15305_15309 = 0;var i__15306_15310 = 0;while(true){
if((i__15306_15310 < count__15305_15309))
{var node_15311 = cljs.core._nth.call(null,chunk__15304_15308,i__15306_15310);goog.dom.classes.add(node_15311,class$);
{
var G__15312 = seq__15303_15307;
var G__15313 = chunk__15304_15308;
var G__15314 = count__15305_15309;
var G__15315 = (i__15306_15310 + 1);
seq__15303_15307 = G__15312;
chunk__15304_15308 = G__15313;
count__15305_15309 = G__15314;
i__15306_15310 = G__15315;
continue;
}
} else
{var temp__4092__auto___15316 = cljs.core.seq.call(null,seq__15303_15307);if(temp__4092__auto___15316)
{var seq__15303_15317__$1 = temp__4092__auto___15316;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15303_15317__$1))
{var c__4148__auto___15318 = cljs.core.chunk_first.call(null,seq__15303_15317__$1);{
var G__15319 = cljs.core.chunk_rest.call(null,seq__15303_15317__$1);
var G__15320 = c__4148__auto___15318;
var G__15321 = cljs.core.count.call(null,c__4148__auto___15318);
var G__15322 = 0;
seq__15303_15307 = G__15319;
chunk__15304_15308 = G__15320;
count__15305_15309 = G__15321;
i__15306_15310 = G__15322;
continue;
}
} else
{var node_15323 = cljs.core.first.call(null,seq__15303_15317__$1);goog.dom.classes.add(node_15323,class$);
{
var G__15324 = cljs.core.next.call(null,seq__15303_15317__$1);
var G__15325 = null;
var G__15326 = 0;
var G__15327 = 0;
seq__15303_15307 = G__15324;
chunk__15304_15308 = G__15325;
count__15305_15309 = G__15326;
i__15306_15310 = G__15327;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__15332_15336 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15333_15337 = null;var count__15334_15338 = 0;var i__15335_15339 = 0;while(true){
if((i__15335_15339 < count__15334_15338))
{var node_15340 = cljs.core._nth.call(null,chunk__15333_15337,i__15335_15339);goog.dom.classes.remove(node_15340,class$);
{
var G__15341 = seq__15332_15336;
var G__15342 = chunk__15333_15337;
var G__15343 = count__15334_15338;
var G__15344 = (i__15335_15339 + 1);
seq__15332_15336 = G__15341;
chunk__15333_15337 = G__15342;
count__15334_15338 = G__15343;
i__15335_15339 = G__15344;
continue;
}
} else
{var temp__4092__auto___15345 = cljs.core.seq.call(null,seq__15332_15336);if(temp__4092__auto___15345)
{var seq__15332_15346__$1 = temp__4092__auto___15345;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15332_15346__$1))
{var c__4148__auto___15347 = cljs.core.chunk_first.call(null,seq__15332_15346__$1);{
var G__15348 = cljs.core.chunk_rest.call(null,seq__15332_15346__$1);
var G__15349 = c__4148__auto___15347;
var G__15350 = cljs.core.count.call(null,c__4148__auto___15347);
var G__15351 = 0;
seq__15332_15336 = G__15348;
chunk__15333_15337 = G__15349;
count__15334_15338 = G__15350;
i__15335_15339 = G__15351;
continue;
}
} else
{var node_15352 = cljs.core.first.call(null,seq__15332_15346__$1);goog.dom.classes.remove(node_15352,class$);
{
var G__15353 = cljs.core.next.call(null,seq__15332_15346__$1);
var G__15354 = null;
var G__15355 = 0;
var G__15356 = 0;
seq__15332_15336 = G__15353;
chunk__15333_15337 = G__15354;
count__15334_15338 = G__15355;
i__15335_15339 = G__15356;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__15361_15365 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15362_15366 = null;var count__15363_15367 = 0;var i__15364_15368 = 0;while(true){
if((i__15364_15368 < count__15363_15367))
{var node_15369 = cljs.core._nth.call(null,chunk__15362_15366,i__15364_15368);goog.dom.classes.toggle(node_15369,class$);
{
var G__15370 = seq__15361_15365;
var G__15371 = chunk__15362_15366;
var G__15372 = count__15363_15367;
var G__15373 = (i__15364_15368 + 1);
seq__15361_15365 = G__15370;
chunk__15362_15366 = G__15371;
count__15363_15367 = G__15372;
i__15364_15368 = G__15373;
continue;
}
} else
{var temp__4092__auto___15374 = cljs.core.seq.call(null,seq__15361_15365);if(temp__4092__auto___15374)
{var seq__15361_15375__$1 = temp__4092__auto___15374;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15361_15375__$1))
{var c__4148__auto___15376 = cljs.core.chunk_first.call(null,seq__15361_15375__$1);{
var G__15377 = cljs.core.chunk_rest.call(null,seq__15361_15375__$1);
var G__15378 = c__4148__auto___15376;
var G__15379 = cljs.core.count.call(null,c__4148__auto___15376);
var G__15380 = 0;
seq__15361_15365 = G__15377;
chunk__15362_15366 = G__15378;
count__15363_15367 = G__15379;
i__15364_15368 = G__15380;
continue;
}
} else
{var node_15381 = cljs.core.first.call(null,seq__15361_15375__$1);goog.dom.classes.toggle(node_15381,class$);
{
var G__15382 = cljs.core.next.call(null,seq__15361_15375__$1);
var G__15383 = null;
var G__15384 = 0;
var G__15385 = 0;
seq__15361_15365 = G__15382;
chunk__15362_15366 = G__15383;
count__15363_15367 = G__15384;
i__15364_15368 = G__15385;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_15394__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__15390_15395 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15391_15396 = null;var count__15392_15397 = 0;var i__15393_15398 = 0;while(true){
if((i__15393_15398 < count__15392_15397))
{var node_15399 = cljs.core._nth.call(null,chunk__15391_15396,i__15393_15398);goog.dom.classes.set(node_15399,classes_15394__$1);
{
var G__15400 = seq__15390_15395;
var G__15401 = chunk__15391_15396;
var G__15402 = count__15392_15397;
var G__15403 = (i__15393_15398 + 1);
seq__15390_15395 = G__15400;
chunk__15391_15396 = G__15401;
count__15392_15397 = G__15402;
i__15393_15398 = G__15403;
continue;
}
} else
{var temp__4092__auto___15404 = cljs.core.seq.call(null,seq__15390_15395);if(temp__4092__auto___15404)
{var seq__15390_15405__$1 = temp__4092__auto___15404;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15390_15405__$1))
{var c__4148__auto___15406 = cljs.core.chunk_first.call(null,seq__15390_15405__$1);{
var G__15407 = cljs.core.chunk_rest.call(null,seq__15390_15405__$1);
var G__15408 = c__4148__auto___15406;
var G__15409 = cljs.core.count.call(null,c__4148__auto___15406);
var G__15410 = 0;
seq__15390_15395 = G__15407;
chunk__15391_15396 = G__15408;
count__15392_15397 = G__15409;
i__15393_15398 = G__15410;
continue;
}
} else
{var node_15411 = cljs.core.first.call(null,seq__15390_15405__$1);goog.dom.classes.set(node_15411,classes_15394__$1);
{
var G__15412 = cljs.core.next.call(null,seq__15390_15405__$1);
var G__15413 = null;
var G__15414 = 0;
var G__15415 = 0;
seq__15390_15395 = G__15412;
chunk__15391_15396 = G__15413;
count__15392_15397 = G__15414;
i__15393_15398 = G__15415;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__15420_15424 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15421_15425 = null;var count__15422_15426 = 0;var i__15423_15427 = 0;while(true){
if((i__15423_15427 < count__15422_15426))
{var node_15428 = cljs.core._nth.call(null,chunk__15421_15425,i__15423_15427);goog.dom.setTextContent(node_15428,value);
{
var G__15429 = seq__15420_15424;
var G__15430 = chunk__15421_15425;
var G__15431 = count__15422_15426;
var G__15432 = (i__15423_15427 + 1);
seq__15420_15424 = G__15429;
chunk__15421_15425 = G__15430;
count__15422_15426 = G__15431;
i__15423_15427 = G__15432;
continue;
}
} else
{var temp__4092__auto___15433 = cljs.core.seq.call(null,seq__15420_15424);if(temp__4092__auto___15433)
{var seq__15420_15434__$1 = temp__4092__auto___15433;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15420_15434__$1))
{var c__4148__auto___15435 = cljs.core.chunk_first.call(null,seq__15420_15434__$1);{
var G__15436 = cljs.core.chunk_rest.call(null,seq__15420_15434__$1);
var G__15437 = c__4148__auto___15435;
var G__15438 = cljs.core.count.call(null,c__4148__auto___15435);
var G__15439 = 0;
seq__15420_15424 = G__15436;
chunk__15421_15425 = G__15437;
count__15422_15426 = G__15438;
i__15423_15427 = G__15439;
continue;
}
} else
{var node_15440 = cljs.core.first.call(null,seq__15420_15434__$1);goog.dom.setTextContent(node_15440,value);
{
var G__15441 = cljs.core.next.call(null,seq__15420_15434__$1);
var G__15442 = null;
var G__15443 = 0;
var G__15444 = 0;
seq__15420_15424 = G__15441;
chunk__15421_15425 = G__15442;
count__15422_15426 = G__15443;
i__15423_15427 = G__15444;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__15449_15453 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15450_15454 = null;var count__15451_15455 = 0;var i__15452_15456 = 0;while(true){
if((i__15452_15456 < count__15451_15455))
{var node_15457 = cljs.core._nth.call(null,chunk__15450_15454,i__15452_15456);goog.dom.forms.setValue(node_15457,value);
{
var G__15458 = seq__15449_15453;
var G__15459 = chunk__15450_15454;
var G__15460 = count__15451_15455;
var G__15461 = (i__15452_15456 + 1);
seq__15449_15453 = G__15458;
chunk__15450_15454 = G__15459;
count__15451_15455 = G__15460;
i__15452_15456 = G__15461;
continue;
}
} else
{var temp__4092__auto___15462 = cljs.core.seq.call(null,seq__15449_15453);if(temp__4092__auto___15462)
{var seq__15449_15463__$1 = temp__4092__auto___15462;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15449_15463__$1))
{var c__4148__auto___15464 = cljs.core.chunk_first.call(null,seq__15449_15463__$1);{
var G__15465 = cljs.core.chunk_rest.call(null,seq__15449_15463__$1);
var G__15466 = c__4148__auto___15464;
var G__15467 = cljs.core.count.call(null,c__4148__auto___15464);
var G__15468 = 0;
seq__15449_15453 = G__15465;
chunk__15450_15454 = G__15466;
count__15451_15455 = G__15467;
i__15452_15456 = G__15468;
continue;
}
} else
{var node_15469 = cljs.core.first.call(null,seq__15449_15463__$1);goog.dom.forms.setValue(node_15469,value);
{
var G__15470 = cljs.core.next.call(null,seq__15449_15463__$1);
var G__15471 = null;
var G__15472 = 0;
var G__15473 = 0;
seq__15449_15453 = G__15470;
chunk__15450_15454 = G__15471;
count__15451_15455 = G__15472;
i__15452_15456 = G__15473;
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
{var value_15484 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__15480_15485 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15481_15486 = null;var count__15482_15487 = 0;var i__15483_15488 = 0;while(true){
if((i__15483_15488 < count__15482_15487))
{var node_15489 = cljs.core._nth.call(null,chunk__15481_15486,i__15483_15488);node_15489.innerHTML = value_15484;
{
var G__15490 = seq__15480_15485;
var G__15491 = chunk__15481_15486;
var G__15492 = count__15482_15487;
var G__15493 = (i__15483_15488 + 1);
seq__15480_15485 = G__15490;
chunk__15481_15486 = G__15491;
count__15482_15487 = G__15492;
i__15483_15488 = G__15493;
continue;
}
} else
{var temp__4092__auto___15494 = cljs.core.seq.call(null,seq__15480_15485);if(temp__4092__auto___15494)
{var seq__15480_15495__$1 = temp__4092__auto___15494;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15480_15495__$1))
{var c__4148__auto___15496 = cljs.core.chunk_first.call(null,seq__15480_15495__$1);{
var G__15497 = cljs.core.chunk_rest.call(null,seq__15480_15495__$1);
var G__15498 = c__4148__auto___15496;
var G__15499 = cljs.core.count.call(null,c__4148__auto___15496);
var G__15500 = 0;
seq__15480_15485 = G__15497;
chunk__15481_15486 = G__15498;
count__15482_15487 = G__15499;
i__15483_15488 = G__15500;
continue;
}
} else
{var node_15501 = cljs.core.first.call(null,seq__15480_15495__$1);node_15501.innerHTML = value_15484;
{
var G__15502 = cljs.core.next.call(null,seq__15480_15495__$1);
var G__15503 = null;
var G__15504 = 0;
var G__15505 = 0;
seq__15480_15485 = G__15502;
chunk__15481_15486 = G__15503;
count__15482_15487 = G__15504;
i__15483_15488 = G__15505;
continue;
}
}
} else
{}
}
break;
}
}catch (e15479){if((e15479 instanceof Error))
{var e_15506 = e15479;domina.replace_children_BANG_.call(null,content,value_15484);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15479;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__15513_15517 = cljs.core.seq.call(null,children);var chunk__15514_15518 = null;var count__15515_15519 = 0;var i__15516_15520 = 0;while(true){
if((i__15516_15520 < count__15515_15519))
{var child_15521 = cljs.core._nth.call(null,chunk__15514_15518,i__15516_15520);frag.appendChild(child_15521);
{
var G__15522 = seq__15513_15517;
var G__15523 = chunk__15514_15518;
var G__15524 = count__15515_15519;
var G__15525 = (i__15516_15520 + 1);
seq__15513_15517 = G__15522;
chunk__15514_15518 = G__15523;
count__15515_15519 = G__15524;
i__15516_15520 = G__15525;
continue;
}
} else
{var temp__4092__auto___15526 = cljs.core.seq.call(null,seq__15513_15517);if(temp__4092__auto___15526)
{var seq__15513_15527__$1 = temp__4092__auto___15526;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15513_15527__$1))
{var c__4148__auto___15528 = cljs.core.chunk_first.call(null,seq__15513_15527__$1);{
var G__15529 = cljs.core.chunk_rest.call(null,seq__15513_15527__$1);
var G__15530 = c__4148__auto___15528;
var G__15531 = cljs.core.count.call(null,c__4148__auto___15528);
var G__15532 = 0;
seq__15513_15517 = G__15529;
chunk__15514_15518 = G__15530;
count__15515_15519 = G__15531;
i__15516_15520 = G__15532;
continue;
}
} else
{var child_15533 = cljs.core.first.call(null,seq__15513_15527__$1);frag.appendChild(child_15533);
{
var G__15534 = cljs.core.next.call(null,seq__15513_15527__$1);
var G__15535 = null;
var G__15536 = 0;
var G__15537 = 0;
seq__15513_15517 = G__15534;
chunk__15514_15518 = G__15535;
count__15515_15519 = G__15536;
i__15516_15520 = G__15537;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15507_SHARP_,p2__15508_SHARP_){return f.call(null,p1__15507_SHARP_,p2__15508_SHARP_);
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
{if((function (){var G__15539 = list_thing;if(G__15539)
{var bit__4050__auto__ = (G__15539.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15539.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15539.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15539);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15539);
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
{if((function (){var G__15540 = content;if(G__15540)
{var bit__4050__auto__ = (G__15540.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15540.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15540.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15540);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15540);
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
{if((function (){var G__15541 = content;if(G__15541)
{var bit__4050__auto__ = (G__15541.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15541.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15541.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15541);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15541);
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